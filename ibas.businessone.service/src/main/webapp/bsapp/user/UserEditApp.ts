/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryBusinessOne } from "../../borep/BORepositories";
import { BO_CODE_USER, IUser } from "../../3rdparty/initialfantasy/index";

/** 编辑应用-用户 */
export class UserEditApp extends ibas.BOEditApplication<IUserEditView, bo.User> {

    /** 应用标识 */
    static APPLICATION_ID: string = "62608aeb-d340-43f6-8f9c-5cff11f7f44b";
    /** 应用名称 */
    static APPLICATION_NAME: string = "businessone_app_user_edit";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.User.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = UserEditApp.APPLICATION_ID;
        this.name = UserEditApp.APPLICATION_NAME;
        this.boCode = UserEditApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.deleteDataEvent = this.deleteData;
        this.view.createDataEvent = this.createData;
        this.view.chooseCompanyEvent = this.chooseCompany;
        this.view.chooseUserEvent = this.chooseUser;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        if (ibas.objects.isNull(this.editData)) {
            // 创建编辑对象实例
            this.editData = new bo.User();
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
        }
        this.view.showUser(this.editData);
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        let that: this = this;
        if (ibas.objects.instanceOf(arguments[0], bo.User)) {
            // 尝试重新查询编辑对象
            let criteria: ibas.ICriteria = arguments[0].criteria();
            if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                // 有效的查询对象查询
                let boRepository: BORepositoryBusinessOne = new BORepositoryBusinessOne();
                boRepository.fetchUser({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.User>): void {
                        let data: bo.User;
                        if (opRslt.resultCode === 0) {
                            data = opRslt.resultObjects.firstOrDefault();
                        }
                        if (ibas.objects.instanceOf(data, bo.User)) {
                            // 查询到了有效数据
                            that.editData = data;
                            that.show();
                        } else {
                            // 数据重新检索无效
                            that.messages({
                                type: ibas.emMessageType.WARNING,
                                message: ibas.i18n.prop("sys_shell_data_deleted_and_created"),
                                onCompleted(): void {
                                    that.show();
                                }
                            });
                        }
                    }
                });
                // 开始查询数据
                return;
            }
        }
        super.run();
    }
    /** 待编辑的数据 */
    protected editData: bo.User;
    /** 保存数据 */
    protected saveData(): void {
        let that: this = this;
        let boRepository: BORepositoryBusinessOne = new BORepositoryBusinessOne();
        boRepository.saveUser({
            beSaved: this.editData,
            onCompleted(opRslt: ibas.IOperationResult<bo.User>): void {
                try {
                    that.busy(false);
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length === 0) {
                        // 删除成功，释放当前对象
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("sys_shell_data_delete") + ibas.i18n.prop("sys_shell_sucessful"));
                        that.editData = undefined;
                    } else {
                        // 替换编辑对象
                        that.editData = opRslt.resultObjects.firstOrDefault();
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("sys_shell_data_save") + ibas.i18n.prop("sys_shell_sucessful"));
                    }
                    // 刷新当前视图
                    that.viewShowed();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.busy(true);
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_saving_data"));
    }
    /** 删除数据 */
    protected deleteData(): void {
        let that: this = this;
        this.messages({
            type: ibas.emMessageType.QUESTION,
            title: ibas.i18n.prop(this.name),
            message: ibas.i18n.prop("sys_whether_to_delete"),
            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
            onCompleted(action: ibas.emMessageAction): void {
                if (action === ibas.emMessageAction.YES) {
                    that.editData.delete();
                    that.saveData();
                }
            }
        });
    }
    /** 新建数据，参数1：是否克隆 */
    protected createData(clone: boolean): void {
        let that: this = this;
        let createData: Function = function (): void {
            if (clone) {
                // 克隆对象
                that.editData = that.editData.clone();
                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_cloned_new"));
                that.viewShowed();
            } else {
                // 新建对象
                that.editData = new bo.User();
                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
                that.viewShowed();
            }
        };
        if (that.editData.isDirty) {
            this.messages({
                type: ibas.emMessageType.QUESTION,
                title: ibas.i18n.prop(this.name),
                message: ibas.i18n.prop("sys_data_not_saved_whether_to_continue"),
                actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                onCompleted(action: ibas.emMessageAction): void {
                    if (action === ibas.emMessageAction.YES) {
                        createData();
                    }
                }
            });
        } else {
            createData();
        }
    }
    /** 选择用户事件 */
    chooseUser(): void {
        let that: this = this;
        ibas.servicesManager.runChooseService<IUser>({
            boCode: BO_CODE_USER,
            criteria: [],
            onCompleted(selecteds: ibas.List<IUser>): void {
                that.editData.user = selecteds.firstOrDefault().code;
            }
        });
    }
    /** 选择公司事件 */
    chooseCompany(): void {
        let that: this = this;
        ibas.servicesManager.runChooseService<bo.Company>({
            boCode: bo.Company.BUSINESS_OBJECT_CODE,
            criteria: [],
            onCompleted(selecteds: ibas.List<bo.Company>): void {
                that.editData.company = selecteds.firstOrDefault().name;
            }
        });
    }
}
/** 视图-用户 */
export interface IUserEditView extends ibas.IBOEditView {
    /** 显示数据 */
    showUser(data: bo.User): void;
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 选择用户事件 */
    chooseUserEvent: Function;
    /** 选择公司事件 */
    chooseCompanyEvent: Function;
}
