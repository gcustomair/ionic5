(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{X3zk:function(n,o,t){"use strict";t.r(o),t.d(o,"LoginPageModule",(function(){return h}));var e=t("ofXK"),i=t("3Pt+"),r=t("tyNb"),a=t("TEn/"),c=t("j1ZV"),g=t("fXoL"),s=t("A0kb");function l(n,o){if(1&n&&(g.Qb(0,"div",21),g.Lb(1,"ion-icon",22),g.Qb(2,"span"),g.yc(3),g.Pb(),g.Pb()),2&n){const n=g.cc().$implicit;g.zb(3),g.zc(n.message)}}function b(n,o){if(1&n&&(g.Ob(0),g.wc(1,l,4,1,"div",20),g.Nb()),2&n){const n=o.$implicit,t=g.cc();g.zb(1),g.jc("ngIf",t.loginForm.get("email").hasError(n.type)&&(t.loginForm.get("email").dirty||t.loginForm.get("email").touched))}}function p(n,o){if(1&n&&(g.Qb(0,"div",21),g.Lb(1,"ion-icon",22),g.Qb(2,"span"),g.yc(3),g.Pb(),g.Pb()),2&n){const n=g.cc().$implicit;g.zb(3),g.zc(n.message)}}function u(n,o){if(1&n&&(g.Ob(0),g.wc(1,p,4,1,"div",20),g.Nb()),2&n){const n=o.$implicit,t=g.cc();g.zb(1),g.jc("ngIf",t.loginForm.get("password").hasError(n.type)&&(t.loginForm.get("password").dirty||t.loginForm.get("password").touched))}}const d=function(){return["/auth/forgot-password"]},m=function(){return["/auth/signup"]},P=[{path:"",component:(()=>{class n{constructor(n,o){this.router=n,this.menu=o,this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 5 characters long."}]},this.loginForm=new i.c({email:new i.a("test@test.com",i.n.compose([i.n.required,i.n.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new i.a("",i.n.compose([i.n.minLength(5),i.n.required]))})}ionViewDidEnter(){this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}doLogin(){console.log("do Log In"),this.router.navigate(["app/categories"])}goToForgotPassword(){console.log("redirect to forgot-password page")}doFacebookLogin(){console.log("facebook login"),this.router.navigate(["app/categories"])}doGoogleLogin(){console.log("google login"),this.router.navigate(["app/categories"])}doTwitterLogin(){console.log("twitter login"),this.router.navigate(["app/categories"])}}return n.\u0275fac=function(o){return new(o||n)(g.Kb(r.f),g.Kb(a.X))},n.\u0275cmp=g.Eb({type:n,selectors:[["app-login"]],decls:38,vars:8,consts:[["color","primary"],["slot","start"],[1,"login-content"],[1,"auth-title"],[3,"formGroup","ngSubmit"],["lines","full",1,"inputs-list"],[1,"input-item"],["type","email","placeholder","Email","formControlName","email","clearInput","","autocapitalize","off","inputmode","email"],[1,"error-container"],[4,"ngFor","ngForOf"],["type","password","placeholder","Password","formControlName","password"],["type","submit","expand","block",1,"login-btn",3,"disabled"],[1,"other-auth-options-row"],["fill","clear",1,"forgot-btn",3,"routerLink"],["fill","clear",1,"signup-btn",3,"routerLink"],[1,"social-auth-options"],[1,"options-divider"],["expand","block","color","facebook",1,"social-auth-btn","facebook-auth-btn",3,"click"],["expand","block","color","google",1,"social-auth-btn","google-auth-btn",3,"click"],["expand","block","color","twitter",1,"social-auth-btn","twitter-auth-btn",3,"click"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(n,o){1&n&&(g.Qb(0,"ion-header"),g.Qb(1,"ion-toolbar",0),g.Qb(2,"ion-buttons",1),g.Lb(3,"ion-back-button"),g.Pb(),g.Qb(4,"ion-title"),g.yc(5,"Log In"),g.Pb(),g.Pb(),g.Pb(),g.Qb(6,"ion-content",2),g.Qb(7,"h2",3),g.yc(8," Welcome! "),g.Lb(9,"br"),g.yc(10," Discover the new Ionic 5 "),g.Pb(),g.Qb(11,"form",4),g.Yb("ngSubmit",(function(){return o.doLogin()})),g.Qb(12,"ion-list",5),g.Qb(13,"ion-item",6),g.Lb(14,"ion-input",7),g.Pb(),g.Qb(15,"div",8),g.wc(16,b,2,1,"ng-container",9),g.Pb(),g.Qb(17,"ion-item",6),g.Qb(18,"app-show-hide-password"),g.Lb(19,"ion-input",10),g.Pb(),g.Pb(),g.Qb(20,"div",8),g.wc(21,u,2,1,"ng-container",9),g.Pb(),g.Pb(),g.Qb(22,"ion-button",11),g.yc(23,"Log In"),g.Pb(),g.Qb(24,"ion-row",12),g.Qb(25,"ion-button",13),g.yc(26," Forgot Password? "),g.Pb(),g.Qb(27,"ion-button",14),g.yc(28," Sign Up! "),g.Pb(),g.Pb(),g.Pb(),g.Qb(29,"div",15),g.Qb(30,"p",16),g.yc(31,"Or"),g.Pb(),g.Qb(32,"ion-button",17),g.Yb("click",(function(){return o.doFacebookLogin()})),g.yc(33,"Log In with Facebook"),g.Pb(),g.Qb(34,"ion-button",18),g.Yb("click",(function(){return o.doGoogleLogin()})),g.yc(35,"Log In with Google"),g.Pb(),g.Qb(36,"ion-button",19),g.Yb("click",(function(){return o.doTwitterLogin()})),g.yc(37,"Log In with Twitter"),g.Pb(),g.Pb(),g.Pb()),2&n&&(g.zb(11),g.jc("formGroup",o.loginForm),g.zb(5),g.jc("ngForOf",o.validation_messages.email),g.zb(5),g.jc("ngForOf",o.validation_messages.password),g.zb(1),g.jc("disabled",!o.loginForm.valid),g.zb(3),g.jc("routerLink",g.lc(6,d)),g.zb(2),g.jc("routerLink",g.lc(7,m)))},directives:[a.l,a.T,a.h,a.d,a.e,a.R,a.k,i.o,i.j,i.d,a.s,a.o,a.n,a.cb,i.i,i.b,e.l,s.a,a.g,a.C,a.ab,r.g,e.m,a.m],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade)}.login-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.login-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{color:var(--ion-color-dark);font-weight:700;margin-top:calc(var(--page-margin)/2);margin-bottom:calc(var(--page-margin)*1.5);letter-spacing:.6px}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{--ion-item-background:var(--page-background)}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/2) 0;display:flex;align-items:center;color:var(--ion-color-danger);font-size:14px}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin)/2);padding-inline-end:calc(var(--page-margin)/2)}.login-content[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/2) 0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]{--color:var(--ion-color-medium);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:var(--page-margin) 0;text-align:center}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]{margin:0}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]:not(:first-child){margin-top:var(--page-margin)}"]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=g.Ib({type:n}),n.\u0275inj=g.Hb({factory:function(o){return new(o||n)},imports:[[e.c,i.f,i.l,a.U,r.i.forChild(P),c.a]]}),n})()}}]);