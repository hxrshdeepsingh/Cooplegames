export default async function Page({ params }: any) {
    let slug = await params;
    console.log(slug.slug)

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Child Category Page</h1>
            <p className="mt-4 text-xl">Slug: {slug.slug}</p>
        </div>
    );
}
