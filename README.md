# lodash
lodash自我实现与源码的对比解析

按照lodash文档目录顺序，但其实lodash很多方法是有引用关系的，如果出现这种将会在后续进行引用改写

lodash关键的惰性求值

关于lodash的库实现，实际上我们是在不停的构建工具函数，越是复杂的操作越需要进行功能拆分，逐渐利用已有工具函数进行拆写