import connectDB from "@/config/db_connect";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
    try {
        await connectDB();
        const property = await Property.findById(params.id);
        if (!property) {
            return new Response('Property Not found', { status: 404 });
        }
        return new Response(JSON.stringify(property), { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', { status: 500 });
    }
}