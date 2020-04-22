import { ManageGoodsDomainStore } from "./businessView/MiddleView/manageGoods/domainStore";
import ManabeGoodsStores from "./businessView/MiddleView/manageGoods/store";
import { SellGoodsDoMainStore } from "./businessView/MiddleView/sellingGoods/domainStore";
import SellGoodsStores from "./businessView/MiddleView/sellingGoods/stores";
import { ListViewDoMainStore } from "./listview/domainStore";
import ListViewStore from "./listview/stores";
import { LoginPageStore } from "./loginPage/domainStore";
import LoginStores from "./loginPage/stores";
import { RegisterPageDomainStore } from "./registerPage/domainStore";
import RegisterPageStores from "./registerPage/stores";
import { CollegeTownDoMainStore } from "./studentView/rightView/afterSchool/collegeTown/domainStore";
import CollegeTownStores from "./studentView/rightView/afterSchool/collegeTown/stores";
import { SouthSnackDoMainStore } from "./studentView/rightView/afterSchool/southSnack/domainStore";
import SouthSnackStores from "./studentView/rightView/afterSchool/southSnack/stores";
import { StepsViewDomainStore } from "./studentView/rightView/cartManage/domainStore";
import StepsViewStore from "./studentView/rightView/cartManage/stores";
import { FirstRestaurantDoMainStore } from "./studentView/rightView/firstRestaurant/domainStore";
import FirstRestaurant from "./studentView/rightView/firstRestaurant/stores";
import { LastWeekDomainStore } from "./studentView/rightView/lastweekView/domainstore";
import LastWeekStores from "./studentView/rightView/lastweekView/store";
import { SecondRestaurantDomainStore } from "./studentView/rightView/secondRestaurant/domainStore";
import SecondRestaurant from "./studentView/rightView/secondRestaurant/stores";
import { TadayRecommendDomainStore } from "./studentView/rightView/tadayRecommend/domainstore";
import TadayRecommendStores from "./studentView/rightView/tadayRecommend/store";

interface IDemoProps {
    GlobalFirstDoMainStore: FirstRestaurantDoMainStore;
    GlobalSecondDoMainStore: SecondRestaurantDomainStore;
    GlobalCollegeTownDoMainStore: CollegeTownDoMainStore;
    GlobalSouthSnackDoMainStore: SouthSnackDoMainStore;
    GlobalLoginPageStore: LoginPageStore;
    GlobalStepsViewDomainStore: StepsViewDomainStore;
    GlobalTadayRecommendDomainStore: TadayRecommendDomainStore;
    GlobalListViewDoMainStore:ListViewDoMainStore;
    GlobalRegisterPageDomainStore:RegisterPageDomainStore;
    GlobalManageGoodsDomainStore: ManageGoodsDomainStore;
    GlobalSellGoodsDoMainStore:SellGoodsDoMainStore;
    GlobalLastWeekDomainStore:LastWeekDomainStore;

}

const DemoStore: IDemoProps = {
    ...FirstRestaurant,
    ...SecondRestaurant,
    ...CollegeTownStores,
    ...SouthSnackStores,
    ...LoginStores,
    ...TadayRecommendStores,
    ...StepsViewStore,
    ...ListViewStore,
    ...RegisterPageStores,
    ...ManabeGoodsStores,
    ...SellGoodsStores,
    ...LastWeekStores,
}


export default DemoStore;