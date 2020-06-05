setTimeout(() => {
    next(null, {
        code: '0000',
        message: '交易成功',
        data: {
            menuList: [
                {
                    menuId: '2001',
                    parentId: '0',
                    name: 'home',
                    title: '首页',
                    icon: 'ios-home',
                    orderValue: null,
                    buttonNames: null
                },
                {
                    menuId: '2002',
                    parentId: '0',
                    name: 'user',
                    title: '用户管理',
                    icon: 'md-person',
                    orderValue: null,
                    buttonNames: null
                },
                {
                    menuId: '2003',
                    parentId: '0',
                    name: 'role',
                    title: '角色管理',
                    icon: 'md-people',
                    orderValue: null,
                    buttonNames: null
                },
                {
                    menuId: '2004',
                    parentId: '0',
                    name: 'system',
                    title: '系统管理',
                    icon: 'md-settings',
                    orderValue: null,
                    buttonNames: null
                },
                {
                    menuId: '2005',
                    parentId: '0',
                    name: 'log',
                    title: '操作日志',
                    icon: 'ios-document',
                    orderValue: null,
                    buttonNames: null
                },
                {
                    menuId: '2006',
                    parentId: '0',
                    name: 'my',
                    title: '我的',
                    icon: 'ios-person',
                    orderValue: null,
                    buttonNames: null
                },
                {
                    menuId: '200601',
                    parentId: '2006',
                    name: 'my_person',
                    title: '个人信息维护',
                    icon: 'md-create',
                    orderValue: null,
                    buttonNames: null
                },
                {
                    menuId: '200602',
                    parentId: '2006',
                    name: 'my_login',
                    title: '登陆密码设置',
                    icon: 'ios-settings',
                    orderValue: null,
                    buttonNames: null
                }
            ],
            buttonNames:
                'my_person_save,role_query,system_info,my_login_save,system_add,role_add,system_edit,user_query,role_delete,user_add,user_info,role_edit,user_edit,log_query,home_query,system_query'
        },
        page: null
    });
}, 0);
