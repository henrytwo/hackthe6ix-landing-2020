export const CONTACT = `
    mutation contactForm($name: String!, $email: String!, $message: String!) {
        contactForm(name: $name, email: $email, message: $message) {
            success
        }
    }
`;
