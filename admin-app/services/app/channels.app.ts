import {ChannelDataModel, ChannelPayloadModel} from "../../src/models/ChannelsDTO";
import { callApi } from "../callApi";
import { CHANNEL_ENDPOINT } from "./endpoint.constant";

export const createNewAChannel = (channelPayload: ChannelPayloadModel) => {
  return callApi(CHANNEL_ENDPOINT.CREATE, "POST", channelPayload);
}

export const getListOfChannel = (filter?: any) => {
  return callApi(CHANNEL_ENDPOINT.GET_LIST, "GET", null)
}

export const updateChannelById = (payloadUpdate: ChannelDataModel) => {
  return callApi(CHANNEL_ENDPOINT.UPDATE + payloadUpdate.id, "PUT", payloadUpdate)
}

export const deleteChannelById = (channelId: string) => {
  return callApi(CHANNEL_ENDPOINT.DELETE + channelId, "DELETE", null)
}