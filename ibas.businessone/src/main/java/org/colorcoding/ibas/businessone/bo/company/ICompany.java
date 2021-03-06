package org.colorcoding.ibas.businessone.bo.company;

import org.colorcoding.ibas.bobas.bo.IBOSimple;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.businessone.data.emRunType;

/**
 * 公司 接口
 * 
 */
public interface ICompany extends IBOSimple {

	/**
	 * 获取-名称
	 * 
	 * @return 值
	 */
	String getName();

	/**
	 * 设置-名称
	 * 
	 * @param value
	 *            值
	 */
	void setName(String value);

	/**
	 * 获取-描述
	 * 
	 * @return 值
	 */
	String getDescription();

	/**
	 * 设置-描述
	 * 
	 * @param value
	 *            值
	 */
	void setDescription(String value);

	/**
	 * 获取-是否启用
	 * 
	 * @return 值
	 */
	emYesNo getActivated();

	/**
	 * 设置-是否启用
	 * 
	 * @param value
	 *            值
	 */
	void setActivated(emYesNo value);

	/**
	 * 获取-服务器
	 * 
	 * @return 值
	 */
	String getServer();

	/**
	 * 设置-服务器
	 * 
	 * @param value
	 *            值
	 */
	void setServer(String value);

	/**
	 * 获取-运行方式
	 * 
	 * @return 值
	 */
	emRunType getRunType();

	/**
	 * 设置-运行方式
	 * 
	 * @param value
	 *            值
	 */
	void setRunType(emRunType value);

	/**
	 * 获取-用户
	 * 
	 * @return 值
	 */
	String getUser();

	/**
	 * 设置-用户
	 * 
	 * @param value
	 *            值
	 */
	void setUser(String value);

	/**
	 * 获取-密码
	 * 
	 * @return 值
	 */
	String getPassword();

	/**
	 * 设置-密码
	 * 
	 * @param value
	 *            值
	 */
	void setPassword(String value);

	/**
	 * 获取-地址
	 * 
	 * @return 值
	 */
	String getAddress();

	/**
	 * 设置-地址
	 * 
	 * @param value
	 *            值
	 */
	void setAddress(String value);

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getObjectKey();

	/**
	 * 设置-对象编号
	 * 
	 * @param value
	 *            值
	 */
	void setObjectKey(Integer value);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-对象类型
	 * 
	 * @param value
	 *            值
	 */
	void setObjectCode(String value);

	/**
	 * 获取-实例号
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-实例号
	 * 
	 * @param value
	 *            值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-服务系列
	 * 
	 * @return 值
	 */
	Integer getSeries();

	/**
	 * 设置-服务系列
	 * 
	 * @param value
	 *            值
	 */
	void setSeries(Integer value);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	String getDataSource();

	/**
	 * 设置-数据源
	 * 
	 * @param value
	 *            值
	 */
	void setDataSource(String value);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	DateTime getCreateDate();

	/**
	 * 设置-创建日期
	 * 
	 * @param value
	 *            值
	 */
	void setCreateDate(DateTime value);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	Short getCreateTime();

	/**
	 * 设置-创建时间
	 * 
	 * @param value
	 *            值
	 */
	void setCreateTime(Short value);

	/**
	 * 获取-更新日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-更新日期
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-更新时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-更新时间
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	Integer getCreateUserSign();

	/**
	 * 设置-创建用户
	 * 
	 * @param value
	 *            值
	 */
	void setCreateUserSign(Integer value);

	/**
	 * 获取-更新用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-更新用户
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateUserSign(Integer value);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	String getCreateActionId();

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value
	 *            值
	 */
	void setCreateActionId(String value);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	String getUpdateActionId();

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value
	 *            值
	 */
	void setUpdateActionId(String value);

	/**
	 * 获取-数据所有者
	 * 
	 * @return 值
	 */
	Integer getDataOwner();

	/**
	 * 设置-数据所有者
	 * 
	 * @param value
	 *            值
	 */
	void setDataOwner(Integer value);

	/**
	 * 获取-团队成员
	 * 
	 * @return 值
	 */
	String getTeamMembers();

	/**
	 * 设置-团队成员
	 * 
	 * @param value
	 *            值
	 */
	void setTeamMembers(String value);

	/**
	 * 获取-数据所属组织
	 * 
	 * @return 值
	 */
	String getOrganization();

	/**
	 * 设置-数据所属组织
	 * 
	 * @param value
	 *            值
	 */
	void setOrganization(String value);

}
