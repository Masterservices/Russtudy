/**
 * Un geste de la chaîne de validation : demander, confirmer, signer.
 * L'action serveur est fournie par l'écran appelant, ce qui garde ce composant
 * ignorant du rôle de celui qui clique.
 */
export default function StepGestureButton({
  action,
  stepId,
  label,
  tone = 'secondary',
}: {
  action: (formData: FormData) => Promise<void>;
  stepId: string;
  label: string;
  tone?: 'primary' | 'secondary';
}) {
  return (
    <form action={action}>
      <input type="hidden" name="stepId" value={stepId} />
      <button type="submit" className={`rs-btn rs-btn-${tone} min-h-[38px] text-[13px]`}>
        {label}
      </button>
    </form>
  );
}
