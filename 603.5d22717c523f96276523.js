"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[603],{8603:(x,a,l)=>{l.r(a),l.d(a,{BooksModule:()=>R});var s=l(8583),r=l(6196),o=l(8720),u=l(7984);let d=(()=>{class e{onMouseEnter(){this.isZoomed=!0}onMouseLeave(){this.isZoomed=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=o.lG2({type:e,selectors:[["","bmZoom",""]],hostVars:2,hostBindings:function(n,i){1&n&&o.NdJ("mouseenter",function(){return i.onMouseEnter()})("mouseleave",function(){return i.onMouseLeave()}),2&n&&o.ekj("small",i.isZoomed)}}),e})(),g=(()=>{class e{transform(n){return n?`${n.substr(0,3)}-${n.substr(3)}`:null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=o.Yjl({name:"isbn",type:e,pure:!0}),e})();function k(e,t){if(1&e&&o._UZ(0,"img",6),2&e){const n=o.oxw();o.Q6J("src",n.book.thumbnails[0].url,o.LSH)}}function B(e,t){if(1&e&&(o.TgZ(0,"div",7),o._uU(1),o.qZA()),2&e){const n=o.oxw();o.xp6(1),o.Oqu(n.book.subtitle)}}function T(e,t){1&e&&(o.TgZ(0,"span"),o._uU(1,", "),o.qZA())}function b(e,t){if(1&e&&(o.TgZ(0,"span"),o._uU(1),o.YNc(2,T,2,0,"span",8),o.qZA()),2&e){const n=t.$implicit,i=t.last;o.xp6(1),o.hij(" ",n,""),o.xp6(1),o.Q6J("ngIf",!i)}}let f=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:10,vars:7,consts:[["class","ui tiny image","bmZoom","",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],["bmZoom","",1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(n,i){1&n&&(o.YNc(0,k,1,1,"img",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o._uU(3),o.qZA(),o.YNc(4,B,2,1,"div",3),o.TgZ(5,"div",4),o.YNc(6,b,3,2,"span",5),o._UZ(7,"br"),o._uU(8),o.ALo(9,"isbn"),o.qZA(),o.qZA()),2&n&&(o.Q6J("ngIf",i.book.thumbnails&&i.book.thumbnails[0]&&i.book.thumbnails[0].url),o.xp6(3),o.Oqu(i.book.title),o.xp6(1),o.Q6J("ngIf",i.book.subtitle),o.xp6(2),o.Q6J("ngForOf",i.book.authors),o.xp6(2),o.hij(" ISBN ",o.lcZ(9,5,i.book.isbn)," "))},directives:[s.O5,s.sg,d],pipes:[g],styles:[""]}),e})();function S(e,t){if(1&e&&o._UZ(0,"bm-book-list-item",5),2&e){const n=t.$implicit;o.Q6J("book",n)("routerLink",n.isbn)}}function C(e,t){1&e&&(o.TgZ(0,"p"),o.SDv(1,6),o.qZA())}function A(e,t){if(1&e&&(o.ynx(0),o.YNc(1,S,1,2,"bm-book-list-item",3),o.YNc(2,C,2,0,"p",4),o.BQk()),2&e){const n=t.ngIf;o.xp6(1),o.Q6J("ngForOf",n),o.xp6(1),o.Q6J("ngIf",!n.length)}}function E(e,t){1&e&&(o.TgZ(0,"div",7),o.TgZ(1,"div",8),o.SDv(2,9),o.qZA(),o.qZA())}let D=(()=>{class e{constructor(n){this.bs=n}ngOnInit(){this.books$=this.bs.getAll()}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(u.T))},e.\u0275cmp=o.Xpm({type:e,selectors:[["bm-book-list"]],decls:5,vars:4,consts:function(){let t,n;return t=$localize`:@@BookListComponent\:no book: Es wurden noch keine Bücher eingetragen. `,n=$localize`:@@BookListComponent\:loading data: Daten werden geladen... `,[[1,"ui","middle","aligned","selection","divided","list"],[4,"ngIf","ngIfElse"],["loading",""],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item",3,"book","routerLink"],t,[1,"ui","active","dimmer"],[1,"ui","large","text","loader"],n]},template:function(n,i){if(1&n&&(o.TgZ(0,"div",0),o.YNc(1,A,3,2,"ng-container",1),o.ALo(2,"async"),o.YNc(3,E,3,0,"ng-template",null,2,o.W1O),o.qZA()),2&n){const _=o.MAs(4);o.xp6(1),o.Q6J("ngIf",o.lcZ(2,2,i.books$))("ngIfElse",_)}},directives:[s.O5,s.sg,f,r.rH],pipes:[s.Ov],styles:[""]}),e})(),I=(()=>{class e{constructor(n,i){this.templateRef=n,this.viewContainerRef=i}ngOnInit(){setTimeout(()=>{this.viewContainerRef.createEmbeddedView(this.templateRef)},this.bmDelay)}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(o.Rgc),o.Y36(o.s_b))},e.\u0275dir=o.lG2({type:e,selectors:[["","bmDelay",""]],inputs:{bmDelay:"bmDelay"}}),e})();function L(e,t){if(1&e&&(o.TgZ(0,"h3"),o._uU(1),o.qZA()),2&e){const n=o.oxw(2);o.xp6(1),o.Oqu(n.book.subtitle)}}function h(e,t){if(1&e&&(o.ynx(0),o._uU(1),o._UZ(2,"br"),o.BQk()),2&e){const n=t.$implicit;o.xp6(1),o.hij(" ",n,"")}}function M(e,t){1&e&&o._UZ(0,"i",21)}function Z(e,t){if(1&e&&(o.ynx(0),o.YNc(1,M,1,0,"i",20),o.BQk()),2&e){const n=t.index;o.xp6(1),o.Q6J("bmDelay",500+200*n)}}function N(e,t){1&e&&o._UZ(0,"img",22),2&e&&o.Q6J("src",t.$implicit.url,o.LSH)}const v=function(e){return["../../admin/edit",e]};function P(e,t){if(1&e){const n=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"h1"),o._uU(2),o.qZA(),o.YNc(3,L,2,1,"h3",2),o._UZ(4,"div",3),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.TgZ(7,"h4"),o.SDv(8,6),o.qZA(),o.YNc(9,h,3,1,"ng-container",7),o.qZA(),o.TgZ(10,"div",5),o.TgZ(11,"h4"),o.SDv(12,8),o.qZA(),o._uU(13),o.ALo(14,"isbn"),o.qZA(),o.TgZ(15,"div",5),o.TgZ(16,"h4"),o.SDv(17,9),o.qZA(),o._uU(18),o.ALo(19,"date"),o.qZA(),o.TgZ(20,"div",5),o.TgZ(21,"h4"),o.SDv(22,10),o.qZA(),o.YNc(23,Z,2,1,"ng-container",7),o.qZA(),o.qZA(),o.TgZ(24,"h4"),o.SDv(25,11),o.qZA(),o.TgZ(26,"p"),o._uU(27),o.qZA(),o.TgZ(28,"div",12),o.YNc(29,N,1,1,"img",13),o.qZA(),o.TgZ(30,"button",14),o.NdJ("click",function(){return o.CHM(n),o.oxw().removeBook()}),o._UZ(31,"i",15),o.ynx(32),o.SDv(33,16),o.BQk(),o.qZA(),o.TgZ(34,"a",17),o._UZ(35,"i",18),o.ynx(36),o.SDv(37,19),o.BQk(),o.qZA(),o.qZA()}if(2&e){const n=o.oxw();o.xp6(2),o.Oqu(n.book.title),o.xp6(1),o.Q6J("ngIf",n.book.subtitle),o.xp6(6),o.Q6J("ngForOf",n.book.authors),o.xp6(4),o.hij(" ",o.lcZ(14,9,n.book.isbn)," "),o.xp6(5),o.hij(" ",o.xi3(19,11,n.book.published,"longDate")," "),o.xp6(5),o.Q6J("ngForOf",n.getRating(n.book.rating)),o.xp6(4),o.Oqu(n.book.description),o.xp6(2),o.Q6J("ngForOf",n.book.thumbnails),o.xp6(5),o.Q6J("routerLink",o.VKq(14,v,n.book.isbn))}}function K(e,t){1&e&&o._UZ(0,"div",23)}const y=[{path:"",component:D},{path:":isbn",component:(()=>{class e{constructor(n,i,_){this.bs=n,this.router=i,this.route=_}ngOnInit(){this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")).subscribe(i=>this.book=i)}getRating(n){return new Array(n)}removeBook(){confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(n=>this.router.navigate(["../"],{relativeTo:this.route}))}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(u.T),o.Y36(r.F0),o.Y36(r.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["bm-book-details"]],decls:3,vars:2,consts:function(){let t,n,i,_,m,p,O;return t=$localize`:@@BookDetailsComponent\:book authors: Autoren `,n=$localize`:@@BookDetailsComponent\:book isbn: ISBN `,i=$localize`:@@BookDetailsComponent\:book published date: Erschienen `,_=$localize`:@@BookDetailsComponent\:book rating: Rating `,m=$localize`:@@BookDetailsComponent\:book description: Beschreibung `,p=$localize`:@@BookDetailsComponent\:book delete: Buch löschen `,O=$localize`:@@BookDetailsComponent\:book edit: Buch bearbeiten `,[[4,"ngIf","ngIfElse"],["loading",""],[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],t,[4,"ngFor","ngForOf"],n,i,_,m,[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","tiny","red","labeled","icon","button",3,"click"],[1,"remove","icon"],p,[1,"ui","tiny","yellow","labeled","icon","button",3,"routerLink"],[1,"write","icon"],O,["class","yellow star icon",4,"bmDelay"],[1,"yellow","star","icon"],[3,"src"],[1,"ui","active","centered","inline","loader"]]},template:function(n,i){if(1&n&&(o.YNc(0,P,38,16,"div",0),o.YNc(1,K,1,0,"ng-template",null,1,o.W1O)),2&n){const _=o.MAs(2);o.Q6J("ngIf",i.book)("ngIfElse",_)}},directives:[s.O5,s.sg,r.yS,I],pipes:[g,s.uU],styles:["p[_ngcontent-%COMP%]{white-space:pre-wrap}"]}),e})()}];let $=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[],imports:[[r.Bz.forChild(y)],r.Bz]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.ez,$]]}),e})()}}]);