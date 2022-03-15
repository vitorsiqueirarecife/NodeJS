import {model} from "mongoose";
import { News, newsScheme } from "../schema/newsScheme";

export const NewsModel = model<News>('User', newsScheme);