(()=>{"use strict";(()=>{var t;!function(t){t.DEL="del",t.DELALL="delAll",t.DIVIDE="divide",t.MULTIPLY="multiply",t.MINUS="minus",t.PLUS="plus",t.EQUALLY="equally",t.SQRT="SQRT",t.POW="POW"}(t||(t={}));const n=t=>{if(NaN!==+t)return+t;throw new Error("This argument is not a number")},e=[{content:"CE",operation:t.DEL},{content:"C",operation:t.DELALL},{content:"/",operation:t.DIVIDE},{content:"*",operation:t.MULTIPLY},{content:"1",operation:null},{content:"2",operation:null},{content:"3",operation:null},{content:"-",operation:t.MINUS},{content:"4",operation:null},{content:"5",operation:null},{content:"6",operation:null},{content:"+",operation:t.PLUS},{content:"7",operation:null},{content:"8",operation:null},{content:"9",operation:null},{content:"^",operation:t.POW},{content:"0",operation:null},{content:".",operation:null},{content:"=",operation:t.EQUALLY},{content:"&#8730",operation:t.SQRT}];class i{constructor(n,i,o){this.$container=n,this.$input=i,this.$tempoInput=o,this.buttons=e,this.operationObjectFunction={[t.DELALL]:()=>this.clearAll="",[t.DEL]:()=>this.clear="",[t.MINUS]:this.calculate.bind(this,t.MINUS),[t.PLUS]:this.calculate.bind(this,t.PLUS),[t.EQUALLY]:this.calculate.bind(this,t.EQUALLY),[t.DIVIDE]:this.calculate.bind(this,t.DIVIDE),[t.MULTIPLY]:this.calculate.bind(this,t.MULTIPLY),[t.SQRT]:this.calculate.bind(this,t.SQRT),[t.POW]:this.calculate.bind(this,t.POW)},this.accum="",this.temporary="",this.operation=null,this.$operation=null,this.$container.addEventListener("click",this.handleChange.bind(this))}init(){const t=document.createElement("div"),n=document.querySelector(".input");t.className="operation",n?.append(t),this.$operation=t,this.$container.innerHTML=this.buttons.map(((t,n)=>`<div class = '${t.operation?"button button-operation":"button button-num"}' data-id = '${n}' ${t.operation?`data-operation = "${t.operation}"`:null}>${t.content}</div>`)).join("")}handleChange(e){const i=e.target;"container"!==i.className&&(i.dataset.operation&&(i.dataset.operation!==t.MINUS||this.accum||this.accum.includes(t.MINUS))?(isFinite(n(this.accum))||"-"===this.accum&&i.dataset.operation===t.DELALL||i.dataset.operation===t.DEL)&&this.operationObjectFunction[i.dataset.operation]():("."!==i.textContent||this.accum?this.accum+="."===i.textContent&&this.accum.includes(".")?"":i.textContent:this.accum+=0+i.textContent,this.$input.innerHTML=this.accum.split("").map((t=>`<span class = "input-text">${t}</span>`)).join("")))}calculate(n){if(n!==t.EQUALLY&&!this.operation){if(this.temporary=this.accum,this.operation=n,this.operation===t.SQRT)return void(this.calculateValue=this.operation);this.$operation.innerHTML=this.temporary?(n=>{switch(this.operation){case t.MINUS:return"-";case t.PLUS:return"+";case t.MULTIPLY:return"*";case t.DIVIDE:return"/";case t.POW:return"^";case t.SQRT:return"&#8730"}})():"",this.$tempoInput.textContent=this.temporary,this.clear=""}this.operation&&this.temporary&&this.accum&&(this.calculateValue=this.operation)}set calculateValue(e){const i={[t.MINUS]:n(this.temporary)-n(this.accum),[t.PLUS]:n(this.temporary)+n(this.accum),[t.DIVIDE]:n(this.temporary)/n(this.accum),[t.MULTIPLY]:n(this.temporary)*n(this.accum),[t.SQRT]:Math.sqrt(n(this.accum)),[t.POW]:n(this.temporary)**n(this.accum)}[e];this.clearAll="",this.sum=i,this.accum=this.sum+"",this.$input.textContent=this.accum}set clearAll(t){this.accum=t,this.operation=null,this.temporary=t,this.$input.textContent=this.accum,this.$tempoInput.textContent=this.temporary,this.$operation.textContent=t}set clear(t){this.accum=t,this.$input.textContent=this.accum}}document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".container"),n=document.querySelector(".enter-input"),e=document.querySelector(".temporary-input");new i(t,n,e).init()}))})()})();