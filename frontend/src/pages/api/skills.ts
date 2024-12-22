import type { NextApiRequest, NextApiResponse } from "next";
import { Skills, skillsList } from "@/models/skills";
import { ApiResponse } from "@/models/apiResponse";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse<Skills[]>>,
) {
	if (req.method === "GET") {
		return res.status(200).json(skillsList);
	}
	return res.status(405).json({ error: "Method not allowed" });
}
