import comment from "@/app/Api/data/comments";
export async function GET() {
	return Response.json(comment);
}
export async function POST(request) {
	const commentt = await request.json();
	const newComment = {
		id: comment.length + 1,
		text: commentt.text,
	};
	comment.push(newComment);
	return new Response(JSON.stringify(newComment), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 201,
	});
}
