/*
 * @Author: Chen
 * @Email: codeeetop@qq.com
 * @Date: 2022-03-29 14:58:39
 * @LastEditTime: 2022-03-31 10:28:27
 * @Description: ...每位新修改者自己的信息
 */

/**
 * 平台内系统用户的唯一标志
 */
module.exports = {

  SYS_USER: "SYS_USER",

  /** 正常状态 */
  NORMAL: "0",

  /** 异常状态 */
  EXCEPTION: "1",

  /** 用户封禁状态 */
  USER_DISABLE: "1",

  /** 角色封禁状态 */
  ROLE_DISABLE: "1",

  /** 部门正常状态 */
  DEPT_NORMAL: "0",

  /** 部门停用状态 */
  DEPT_DISABLE: "1",

  /** 字典正常状态 */
  DICT_NORMAL: "0",

  /** 是否为系统默认（是） */
  YES: "Y",

  /** 是否菜单外链（是） */
  YES_FRAME: "0",

  /** 是否菜单外链（否） */
  NO_FRAME: "1",

  /** 菜单类型（目录） */
  TYPE_DIR: "M",

  /** 菜单类型（菜单） */
  TYPE_MENU: "C",

  /** 菜单类型（按钮） */
  TYPE_BUTTON: "F",

  /** Layout组件标识 */
  LAYOUT: "Layout",

  /** ParentView组件标识 */
  PARENT_VIEW: "ParentView",

  /** InnerLink组件标识 */
  INNER_LINK: "InnerLink",

  /** 校验返回结果码 */
  UNIQUE: "0",
  NOT_UNIQUE: "1",

  /**
   * 用户名长度限制
   */
  USERNAME_MIN_LENGTH: 2,
  USERNAME_MAX_LENGTH: 20,

  /**
   * 密码长度限制
   */
  PASSWORD_MIN_LENGTH: 5,
  PASSWORD_MAX_LENGTH: 20,
}