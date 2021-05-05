import { Category } from "./category";
import { responseModel } from "./responseModel";

export interface categoryResponseModel extends responseModel{
    data:Category[];
}