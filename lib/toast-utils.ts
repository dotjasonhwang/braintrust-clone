import { toast } from "sonner";

/**
 * Show a toast message for features not yet implemented
 */
export function showNotImplemented() {
  toast.info(
    "You're on a free plan, upgrade to the 'Employer' plan to unlock this pro feature."
  );
}
