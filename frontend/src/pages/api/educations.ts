import type { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "@/models/apiResponse";
import { Education, educationList } from "@/models/educations";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse<Education[]>>,
) {
	if (req.method === "GET") {
		return res.status(200).json(educationList);
	}
	return res.status(405).json({ error: "Method not allowed" });
}
