interface Window{
    ga: (
            evenName: String,
            options: {
            hitType: string;
            eventCategory?: string;
            }
        ) => void;
}
/**
 * declare var ga: (
    evenName: String,
    options: {
        hitType: string;
        eventCategory?: string;
    }
) => void;
 */

