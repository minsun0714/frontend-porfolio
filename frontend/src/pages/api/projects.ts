import type { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "@/models/apiResponse";
import { Project, projectList } from "@/models/projects";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse<Project[]>>,
) {
	if (req.method === "GET") {
		return res.status(200).json(projectList);
	}
	return res.status(405).json({ error: "Method not allowed" });
}
