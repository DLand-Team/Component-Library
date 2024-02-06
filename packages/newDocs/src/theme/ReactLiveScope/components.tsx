/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from "@docusaurus/BrowserOnly";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { forwardRef } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { default as FormDemo } from "./FormDemo";
import LiveCode from "@site/src/components/liveCode";
export { default as CarouselDemo } from "./CarouselDemo";
export { default as TreeDemo, TreeProps } from "./TreeDemo";
export { default as TreeFormDemo } from "./TreeFormDemo";
export { default as TabFormDemo } from "./TabFormDemo";
export { default as FieldAutoCompleteDemo } from "./FieldAutoCompleteDemo";
export { default as FieldCheckboxDemo } from "./FieldCheckboxDemo";
export { default as FieldDatePickerDemo } from "./FieldDatePickerDemo";
export { default as FieldEditorDemo } from "./FieldEditorDemo";
export { default as FieldMulDemo, FieldMulDemo2 } from "./FieldMulDemo";
export { default as FieldRadioGroupDemo } from "./FieldRadioGroupDemo";
export { default as FieldSelectDemo } from "./FieldSelectDemo";
export { default as FieldSliderDemo } from "./FieldSliderDemo";
export { default as FieldSwitchDemo } from "./FieldSwitchDemo";
export { default as FieldCodeDemo } from "./FieldCodeDemo";
export { default as TabViewDemo, TabViewProps } from "./TabViewDemo";

export {
  default as FieldTextDemo,
  FieldTextProps,
} from "./FieldTextDemo/index";
export { default as FieldUploadDemo } from "./FieldUploadDemo";

// hoc: 包装组件和函数
const Hoc = (name, optionCallf?) => {
  return forwardRef((props, ref) => {
    return (
      <BrowserOnly>
        {() => {
          optionCallf?.();
          const LibComponent = require("mui-eazy")[name];
          return <LibComponent ref={ref} {...props} />;
        }}
      </BrowserOnly>
    );
  });
};


const HocFunc = (name, optionCallf?) => {
  optionCallf?.();
  return (props?) => {
    console.log(props);
    const isBro = useIsBrowser();
    return isBro && require("mui-eazy")[name](props);
  };
};


const HocObj = (name, optionCallf?) => {
  optionCallf?.();
  return ExecutionEnvironment.canUseDOM && require("mui-eazy")[name];
};
// comp
export const Carousel = Hoc("Carousel", () => {
});
export const TreeForm = Hoc("TreeForm", () => {
});
export const TabForm = Hoc("TabForm", () => {
});
// base
export const Iconify = Hoc('Iconify')
export const Modal = Hoc('Modal')
export const Tree = Hoc("Tree");
export const FieldCode = Hoc("FieldCode");
export const FieldSwitch = Hoc("FieldSwitch");
export const FieldSlider = Hoc("FieldSlider");
export const FieldRadioGroup = Hoc("FieldRadioGroup");
export const FieldDatePicker = Hoc("FieldDatePicker");
export const FieldEditor = Hoc("FieldEditor");
export const FieldMul = Hoc("FieldMul");
export const FieldCheckbox = Hoc("FieldCheckbox");
export const FieldSelect = Hoc("FieldSelect");
export const CarouselArrows = Hoc("CarouselArrows");
export const Image = Hoc("Image");
export const FormProvider = Hoc("FormProvider");
export const FieldText = Hoc("FieldText");
export const NotifyProvider = Hoc("NotifyProvider");
export const FieldUpload = Hoc("FieldUpload");
export const TabView = Hoc("TabView");
export const FormDemoEx = () => {
  return <BrowserOnly>
    {() => {
      return <><FormDemo /></>
    }}
  </BrowserOnly>
}
// func
export const useCarousel = HocFunc("useCarousel");
export const useBoolean = HocFunc("useBoolean");
export const useFields = HocFunc("useFields");
export const uuidv4 = HocFunc("uuidv4");
export const useFormRef = HocFunc("useFormRef");
export const getValueByPath = HocFunc("getValueByPath");
// obj
export const notify = HocObj("notify");
export const Yup = HocObj("myYup");
// lib
export const LiveCodeClient = () => {
  return ExecutionEnvironment.canUseDOM ? <BrowserOnly>{() => {
    return <LiveCode>{""}</LiveCode>
  }}</BrowserOnly> : <div></div>
}