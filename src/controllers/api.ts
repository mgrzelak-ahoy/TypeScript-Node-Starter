"use strict";

import { Response, Request, } from "express";


/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {
    res.json({ answer: 42 });
};

/**
 * GET /api/facebook
 * Facebook API example.
 */

