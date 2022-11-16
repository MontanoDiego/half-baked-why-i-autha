// Enter Supabase Information
const SUPABASE_URL = 'https://mjwfhlyotmsokgnuhrbi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qd2ZobHlvdG1zb2tnbnVocmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMTA4NjQsImV4cCI6MTk4MzY4Njg2NH0.59u5grTqRbWsLqKJ26MiKt2xRJVQ5w3o-GhxYYUQvMA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./other-page');
    }
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}