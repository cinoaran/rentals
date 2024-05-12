const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
// GET ALL PROPERTIES
async function getProperties() {
    try {
        // Handle the case the domain is not available yet, because of .env file will set separately on vercel
        if (!apiDomain) {
            return [];
        }
        const res = await fetch(`${apiDomain}/properties`, { cache: 'no-store' });
        if (!res.ok) { throw new Error('Could not fetch properties'); }
        return res.json();
    } catch (error) {
        console.log(error)
        return [];
    }
}

// GET SINGLE PROPERTY
async function getProperty(id) {
    try {
        // Handle the case the domain is not available yet, because of .env file will set separately on vercel
        if (!apiDomain) {
            return null;
        }
        const res = await fetch(`${apiDomain}/properties/${id}`);
        if (!res.ok) { throw new Error('Could not fetch property'); }
        return res.json();
    } catch (error) {
        console.log(error)
        return null;
    }
}


export { getProperties, getProperty };