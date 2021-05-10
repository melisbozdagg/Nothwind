import { responseModel } from "./responseModel";

export interface singleResponseModel<T> extends responseModel{
ddata:T;
}