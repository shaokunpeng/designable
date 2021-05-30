import { IEventProps, Event } from '@designable/shared'
import {
  Engine,
  ITreeNode,
  ScreenType,
  Shortcut,
  Viewport,
  Workbench,
  Workspace,
  TreeNode,
  JSONSchema7,
} from './models'

export type IEngineProps<T = Event> = IEventProps<T> & {
  sourceIdAttrName?: string //拖拽源Id的dom属性名
  nodeIdAttrName?: string //节点Id的dom属性名
  outlineNodeIdAttrName?: string //大纲树节点ID的dom属性名
  nodeHelpersIdAttrName?: string //节点工具栏属性名
  defaultComponentTree?: ITreeNode[] //默认组件树
  defaultScreenType?: ScreenType
  shortcuts?: Shortcut[]
}

export type IEngineContext = {
  workspace: Workspace
  workbench: Workbench
  engine: Engine
  viewport: Viewport
}

export type IControlType = boolean | ((node: TreeNode) => boolean)

export type IControlNodeMetaType = {
  componentName: string //指定组件类型
  id?: string //指定实例ID
  maxInstances?: number //最大实例数量
  minInstances?: number //最小实例数量
}

export type IControlNodeType =
  | string
  | IControlNodeMetaType
  | ((node: TreeNode) => IControlNodeMetaType)

export interface IDesignerControllerProps {
  package?: string //npm包名
  registry?: string //web npm注册平台地址
  version?: string //semever版本号
  path?: string //组件模块路径
  title?: string //标题
  description?: string //描述
  icon?: string //icon
  group?: string //分类
  droppable?: IControlType //是否可作为拖拽容器，默认为true
  draggable?: IControlType //是否可拖拽，默认为true
  deletable?: IControlType //是否可删除，默认为true
  cloneable?: IControlType //是否可拷贝，默认为true
  resizable?: IControlType //是否可修改尺寸，默认为false
  inlineLayout?: IControlType //是否是内联布局
  inlineChildrenLayout?: IControlType //子节点是否内联
  selfRenderChildren?: IControlType //是否自己渲染子节点
  propsSchema?: JSONSchema7 //标准JSON Schema
  effects?: (engine: Engine) => void
  getDragNodes?: (node: TreeNode) => TreeNode[] //拦截拖拽节点
  getComponentProps?: (node: TreeNode) => any //拦截属性
  allowAppend?: (target: TreeNode, sources?: TreeNode[]) => boolean
  allowSiblings?: (target: TreeNode, sources?: TreeNode[]) => boolean
}

export interface IDesignerProps extends IDesignerControllerProps {
  droppable?: boolean //是否可作为拖拽容器，默认为true
  draggable?: boolean //是否可拖拽，默认为true
  deletable?: boolean //是否可删除，默认为true
  cloneable?: boolean //是否可拷贝，默认为true
  resizable?: boolean //是否可修改尺寸，默认为false
  inlineLayout?: boolean //是否是内联布局
  inlineChildrenLayout?: boolean //子节点是否内联
  selfRenderChildren?: boolean //是否自己渲染子节点
}

export type IDesignerControllerPropsMap = Record<
  string,
  IDesignerControllerProps
>
export type IDesignerPropsMap = Record<string, IDesignerProps>
export interface IDesignerLocales {
  messages: {
    [ISOCode: string]: {
      [key: string]: string
    }
  }
  language: string
}