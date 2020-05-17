import { FormComponentProps } from "antd/lib/form";
import { OrderManagementviewDoMainStore } from "../../domainStore";
import { FromViewUiAction } from "./uiAction";

export interface IFromViewProps extends FormComponentProps {
    
    GlobalOrderManagementviewDoMainStore?: OrderManagementviewDoMainStore;    
    /**
     * 父组件将实现此方法，以获得子组件的action
     * 子组件通过调用此接口方法，将内部的Action 传递给父组件
     */
    getUiAction: (action: FromViewUiAction) => void;
}