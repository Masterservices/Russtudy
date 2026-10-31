import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Stockage objet Neon (compatible S3), utilisé uniquement côté serveur.
// Noms NEON_STORAGE_* plutôt que AWS_* : Vercel réserve une partie des variables AWS_*.
let client: S3Client | undefined;

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} n'est pas défini.`);
  return value;
}

export function getBucket(): string {
  return required("NEON_STORAGE_BUCKET");
}

export function getStorage(): S3Client {
  if (!client) {
    client = new S3Client({
      endpoint: required("NEON_STORAGE_S3_ENDPOINT"),
      region: required("NEON_STORAGE_REGION"),
      credentials: {
        accessKeyId: required("NEON_STORAGE_ACCESS_KEY_ID"),
        secretAccessKey: required("NEON_STORAGE_SECRET_ACCESS_KEY"),
      },
      forcePathStyle: true, // obligatoire chez Neon
    });
  }
  return client;
}

export async function putObject(key: string, body: Uint8Array | string, contentType: string) {
  await getStorage().send(
    new PutObjectCommand({ Bucket: getBucket(), Key: key, Body: body, ContentType: contentType }),
  );
}

export async function getObjectText(key: string): Promise<string> {
  const response = await getStorage().send(new GetObjectCommand({ Bucket: getBucket(), Key: key }));
  return (await response.Body?.transformToString()) ?? "";
}

export async function deleteObject(key: string) {
  await getStorage().send(new DeleteObjectCommand({ Bucket: getBucket(), Key: key }));
}

// Lien de téléchargement temporaire : le bucket reste privé.
export function signedDownloadUrl(key: string, expiresIn = 600): Promise<string> {
  return getSignedUrl(getStorage(), new GetObjectCommand({ Bucket: getBucket(), Key: key }), {
    expiresIn,
  });
}

// Lien d'envoi temporaire, pour un upload direct depuis le navigateur.
export function signedUploadUrl(key: string, contentType: string, expiresIn = 600): Promise<string> {
  return getSignedUrl(
    getStorage(),
    new PutObjectCommand({ Bucket: getBucket(), Key: key, ContentType: contentType }),
    { expiresIn },
  );
}
