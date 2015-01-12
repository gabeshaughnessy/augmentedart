
(function($,Edge,compId){var _=null,y=true,n=false,x9='700',e35='${_Monster-Image}',x38='935px',a='Base State',x36='dice-roll-sprite',bsz='background-size',x30='hidden',e33='${_Dead_Player}',s='style',i='none',e22='${_Monster-Title}',lf='left',e24='${_DefenseAttribute}',e25='${_Status}',e26='${_Monster-Description}',e27='${_AttributeLabel_Attack}',x18='bold',bp='background-position',bg='background-color',x40='auto',fs='font-size',tp='top',ta='text-align',ov='overflow',xc='rgba(0,0,0,1)',x21='stage',t='transform',x2='4.0.0.359',c='color',x4='rgba(0,0,0,0)',e23='${_AttackAttribute}',g='image',po='center',x42='dice-roll-sprite_symbol_1',e34='${_diceRoll}',e45='${_dice-roll-sprite}',x43='@@0@@px @@1@@px',x='text',m='rect',x37='0px',h='height',x17='\'Lucida Console\', Monaco, monospace',p='px',o='opacity',x1='4.0.0',rz='rotateZ',r='deg',e44='${symbolSelector}',x39='990px',e31='${_DefenseAttributeLabel}',x20='rgba(192,192,192,0)',ql='linear',l='normal',x14='rgba(192,192,192,0.00)',e32='${_MonsterAttributes}',x8='Lucida Console, Monaco, monospace',x7='15',x13='18',w='width',x16='14',x11='24',dt='Default Timeline',x3='horizontal',ff='font-family',e29='${_Stage}',x28='rgba(255,255,255,0.00)';var im='images/';var g5='monster.png',g41='dice-roll-sprite.png';var s12="Status Message",s6="Description goes right here and takes up a couple of lines.",s10="Monster Title",s19="Defense Attribute",s15="Attack Atrribute";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Monster-Image',t:g,r:['67px','39px','349px','367px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Monster-Description',t:x,r:['23px','529px','422px','55px','auto','auto'],text:s6,n:[x8,x7,xc,x9,i,""]},{id:'Monster-Title',t:x,r:['37px','492px','422px','auto','auto','auto'],text:s10,align:"center",n:[x8,x11,xc,x9,i,""]},{id:'Status',t:x,r:['27px','21px','445px','87px','auto','auto'],text:s12,align:"center",n:[x8,x13,xc,l,i,""]},{id:'diceRoll',t:m,r:['198','241','auto','auto','auto','auto']},{id:'MonsterAttributes',t:m,r:['37px','578px','422px','116px','auto','auto'],f:[x14],s:[0,xc,i]},{id:'AttributeLabel_Attack',t:x,r:['37px','578px','auto','auto','auto','auto'],text:s15,align:"left",n:[x17,x16,xc,x18,i,l]},{id:'DefenseAttributeLabel',t:x,r:['250px','578px','auto','auto','auto','auto'],text:s19,align:"left",n:[x17,x16,xc,x18,i,l]},{id:'AttackAttribute',t:m,r:['37px','597px','204px','47px','auto','auto'],f:[x14],s:[0,"rgb(0, 0, 0)",i]},{id:'DefenseAttribute',t:m,r:['248px','597px','204px','47px','auto','auto'],f:[x14],s:[0,"rgb(0, 0, 0)",i]},{id:'Dead_Player',t:m,r:['23px','22px','100%','100%','auto','auto'],f:[x20],s:[0,"rgb(0, 0, 0)",i]}],sI:[{id:'diceRoll',sN:'dice-roll-sprite_symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:13514,a:y,l:{"monster-attack-start":61,"monster-attacks":1066,"block":2458,"block-results":3662,"player-attacks":5084,"attack-results":6100,"battle-results":6931,"tie-game-start":8806,"tie-game":8883,"tiebreaker":12542,"monster-wins":12792,"player-wins":13106,"loop":13292,"dead":13514},tt:[]}}},"dice-roll-sprite_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x36,t:g,r:[x37,x37,x38,x39,x40,x40],f:[x4,im+g41,x37,x37,x38,x39]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2583,a:n,l:{"roll":83,"loop":927,"frame-1":1000,"frame-2":1083,"frame-3":1166,"frame-4":1250,"frame-5":1333,"frame-6":1416,"frame-7":1500,"frame-8":1583,"frame-9":1666,"frame-10":1750,"frame-11":1833,"frame-12":1916,"frame-13":2000,"frame-14":2083,"frame-15":2166,"frame-16":2250,"frame-17":2333,"frame-18":2416,"frame-19":2500,"frame-20":2583},tt:[]}}}};var S1=symbols[x21];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e22).P(tp,492).P(fs,24).P(ta,po).P(ff,x17).P(h,31).P("font-weight",x18).P(lf,37).P(w,422);A1.A(e23).P(tp,597).P(lf,37).P(bg,x14,c);A1.A(e24).P(tp,597).P(lf,248).P(bg,x14,c);A1.A(e25).P(tp,21).P(ta,po).P(fs,18).P(h,87).P(ff,x8).P(lf,27).P(w,445);A1.A(e26).P(tp,529).P(fs,14).P(ff,x17).P(h,55).P("font-weight",x18).P(lf,37).P(w,422);A1.A(e27).P(tp,578).P(lf,37);A1.A(e29).P(bg,x28,c).P(w,500).P(h,800).P(ov,x30);A1.A(e31).P(tp,578).P(lf,250);A1.A(e32).P(bg,x14,c);A1.A(e33).P(h,0,_,_,"%").T(0,0).T(13.514,100).P(w,0).T(0,0).T(13.514,100);A1.A(e34).P(tp,191).P(lf,156).T(11.26,156).P(o,0,_,_,"").T(0,1,0.143,ql).T(2.25,0,0.143).T(2.458,1,0.143).T(4.876,0,0.143).T(5.084,1,0.143).T(6.78,0,0.151).T(8.882,1,0.143).T(10.658,0,0.13).T(10.787,1,0.068).T(12.393,0,0.149);A1.A(e35).P(h,367).P(lf,67).P(w,349).P(tp,111).T(2.458,111);var S2=symbols[x42];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e44).P(h,198).P(w,187);A2.A(e45).P(rz,0,t,_,r).P(bsz,[935,990],_,x43).P(tp,0,_,_,p).T(0,0).P(h,198).T(0,198,_,_,0).P(lf,0).T(0,0).P(bp,[-561,-594],_,x43).T(0,[-748,-594]).T(0.083,[0,-792]).T(0.167,[-187,-792]).T(0.25,[-374,-792]).T(0.333,[-561,-792]).T(0.417,[-748,-792]).T(0.5,[0,-792]).T(0.594,[-374,-792],_,_,[-187,-792]).T(0.675,[-187,-792]).T(0.75,[-561,-792]).T(0.834,[-748,-792]).T(0.927,[-561,-792]).T(1,[0,0]).T(1.083,[-187,0]).T(1.166,[-374,0]).T(1.25,[-561,0]).T(1.333,[-748,0]).T(1.416,[0,-198]).T(1.5,[-187,-198]).T(1.583,[-374,-198]).T(1.666,[-561,-198]).T(1.75,[-748,-198]).T(1.833,[0,-396]).T(1.916,[-187,-396]).T(2,[-374,-396]).T(2.083,[-561,-396]).T(2.166,[-748,-396]).T(2.25,[0,-594]).T(2.333,[-187,-594]).T(2.416,[-374,-594]).T(2.5,[-561,-594]).T(2.583,[-748,-594]).P(w,187).T(0,187,_,_,0);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"monster");