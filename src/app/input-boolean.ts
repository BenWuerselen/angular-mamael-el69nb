import { InputTemplate } from "./input-template.type";

/**
 * Presents the type in the inputs in the case of boolean.
 */
export type InputBoolean<
  TBoolean = boolean,
  TString = "true" | "false" | ""
> = InputTemplate<TBoolean, TString>;
