import { FlattenMaps } from "mongoose";

type jsonDataParserProps =
  | (FlattenMaps<any> &
      Required<{
        _id: unknown;
      }> & {
        __v: number;
      })[]
  | (FlattenMaps<any> &
      Required<{
        _id: unknown;
      }> & {
        __v: number;
      })
  | null;

const jsonDataParser = (data: jsonDataParserProps) => {
  return JSON.parse(JSON.stringify(data));
};

export default jsonDataParser;
