import { ITopSearchViewProps } from "./interface";

export class TopSearchUiAction{

    private props:ITopSearchViewProps;

    constructor(props:ITopSearchViewProps){
        this.props = props;
        this.onClickSearch = this.onClickSearch.bind(this);
        this.handleDishname = this.handleDishname.bind(this);
        this.handleStartPrice = this.handleStartPrice.bind(this);
        this.handleEndPrice= this.handleEndPrice.bind(this);
        this.onClickSave = this.onClickSave.bind(this); 
    }
    /**
     * 需要查询的菜名
     * @param event 
     */
    public handleDishname(event: React.ChangeEvent<HTMLInputElement>){
        this.props.GlobalFirstDoMainStore!.Dishname = event.target.value;
    }

    /**
     * 需要查询的开始价格
     * @param event 
     */
    public handleStartPrice(event: React.ChangeEvent<HTMLInputElement>){
        this.props.GlobalFirstDoMainStore!.StartPrice = event.target.value;
    }

    /**
     * 需要查询的结束价格
     * @param event 
     */
    public handleEndPrice(event: React.ChangeEvent<HTMLInputElement>){
        this.props.GlobalFirstDoMainStore!.EndPrice = event.target.value;
    }

    /**
     * 查询按钮事件
     */
    public onClickSearch(){
        this.props.GlobalFirstDoMainStore!.SearchBtn();
    }

    /**
     * 保存按钮事件
     */
    public onClickSave(){   
        console.log("this.props.GWWWWWWWW!,",this.props.GlobalListViewDoMainStore!.LoginUsername);
        this.props.GlobalFirstDoMainStore!.ceshi1  = this.props.GlobalListViewDoMainStore!.LoginUsername;
        this.props.GlobalFirstDoMainStore!.SaveBtn();
    }
}