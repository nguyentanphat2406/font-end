import { RoleDataModel, RolePayloadModel } from "../../src/models/RolesDTO";
import { callApi } from "../callApi";
import { ROLE_ENDPOINT } from "./endpoint.constant";

export const createNewARole = (payload: RolePayloadModel) => {
  return callApi(ROLE_ENDPOINT.CREATE, "POST", payload);
};

export const getListOfRole = (filter?: any) => {
  return callApi(ROLE_ENDPOINT.GET_LIST, "GET", null);
};

export const updateRoleById = (payloadUpdate: RoleDataModel) => {
  return callApi(ROLE_ENDPOINT.UPDATE + payloadUpdate.id, "PUT", payloadUpdate);
};

export const deleteRoleById = (id: string) => {
  return callApi(ROLE_ENDPOINT.DELETE + id, "DELETE", null);
};
