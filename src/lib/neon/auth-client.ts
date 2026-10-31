'use client';

import { createAuthClient } from '@neon/auth/next';

/**
 * Client Neon Auth côté navigateur : uniquement pour la connexion Google
 * (redirection OAuth). Les formulaires e-mail / mot de passe passent par des
 * server actions, pour que les cookies de session restent httpOnly.
 */
export const authClient = createAuthClient();
