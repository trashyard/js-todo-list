(()=>{"use strict";function e(e,t,o,n,c,d){return{title:e,desc:t,dueDate:o,priority:n,note:c,check:d}}function t(e,t){l[e].todo.splice(t,1),d.listTodos(l[e].todo,e)}const o=document.querySelector(".containerTodo"),n=document.querySelector(".containerProject"),c={clearTodo:()=>{o.innerHTML=null},clearProject:()=>{n.innerHTML=null},listTodos:(n,a)=>{if(c.clearTodo(),console.log(n),n.length>0)for(let e=0;e<n.length;e++){const c=document.createElement("div"),d=document.createElement("h1"),l=document.createElement("p"),r=()=>n[e].check?"nice":"gkdl";c.classList.add("todo-card"),d.textContent=n[e].title,l.textContent=r();const i=document.createElement("button");i.textContent="DELETE",i.addEventListener("click",(()=>{t(a,e)})),[d,l,i].forEach((e=>c.appendChild(e))),o.appendChild(c)}else o.textContent="None";const r=document.createElement("button");r.textContent="Add Todo",r.addEventListener("click",(()=>{!function(e,t){l[t].todo.push(e),d.listTodos(l[t].todo,t)}(e("gendeng","ya","kapan kapan","low","none"),a)})),o.appendChild(r)},listProject:e=>{c.clearProject(),e.forEach(((e,t)=>{const o=document.createElement("div"),a=document.createElement("h3"),r=document.createElement("p"),i=document.createElement("button");o.classList.add("project-card"),a.textContent=e.title,r.textContent=e.desc,i.textContent="DELETE",o.addEventListener("click",(()=>{c.listTodos(e.todo,t)})),i.addEventListener("click",(()=>{var e;e=t,l.splice(e,1),d.listProject(l)})),[a,r].forEach((e=>{o.appendChild(e)})),n.appendChild(o),n.appendChild(i)}))},ProjectAdd:()=>{document.querySelector("#addProjectBtn").addEventListener("click",(()=>{const e=document.querySelector("#projectName").value,t=document.querySelector("#projectDesc").value,o=a(e,t);var n;e&&t?(n=o,l.push(n),d.listProject(l)):alert("yg bener")}))}},d=c;let l=[];function a(e,t){return{title:e,desc:t,todo:[]}}(()=>{let t=[e("si gandi","lol","gatau","besok","kapan",!0),e("si babi","hmm","gatau","besok","kapan",!1),e("si iblis","hmm","gatau","besok","kapan",!0)],o=a("fuck gandi","wow"),n=a("Default","wow");l.push(n),l.push(o),l[0].todo.push(...t),l[1].todo.push(...t),d.listProject(l),d.ProjectAdd()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0MsRURnRmRRLEdBQVE5QyxHQ2hGTXNDLEVEZ0ZZSSxFQy9FOUJsQyxFQUFTK0IsS0FBS0QsR0FDZCxjQUFxQjlCLElEOEVvQndDLE1BQU0saUJBTWpELElDNUZBLElBQUl4QyxFQUFXLEdBRWYsU0FBU3VDLEVBQVdoRCxFQUFPQyxHQUN6QixNQUFPLENBQUVELE1BQUFBLEVBQU9DLEtBQUFBLEVBQU1TLEtBQU0sSUFhakIsTUFHWCxJQUdJd0MsRUFBUSxDQUhEbkQsRUFBUSxXQUFZLE1BQU8sUUFBUyxRQUFTLFNBQVMsR0FDdERBLEVBQVEsVUFBVyxNQUFPLFFBQVMsUUFBUyxTQUFTLEdBQ3JEQSxFQUFRLFdBQVksTUFBTyxRQUFTLFFBQVMsU0FBUyxJQUU3RG9ELEVBQU9ILEVBQVcsYUFBYyxPQUNoQ0ksRUFBT0osRUFBVyxVQUFXLE9BQ2pDdkMsRUFBUytCLEtBQUtZLEdBQ2QzQyxFQUFTK0IsS0FBS1csR0FDZDFDLEVBQVMsR0FBR0MsS0FBSzhCLFFBQVFVLEdBQ3pCekMsRUFBUyxHQUFHQyxLQUFLOEIsUUFBUVUsR0FDekIsY0FBcUJ6QyxHQUNyQixnQkMvQkY0QyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01TdHVmZiBmcm9tIFwiLi9kb21cIlxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCJcblxuZnVuY3Rpb24gbmV3VG9kbyAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlLCBjaGVjaykge1xuICByZXR1cm4geyB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGUsIGNoZWNrIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9kbyAodmFsdWUsIGluZGV4KSB7XG4gIHByb2plY3RzW2luZGV4XS50b2RvLnB1c2godmFsdWUpXG4gIERPTVN0dWZmLmxpc3RUb2Rvcyhwcm9qZWN0c1tpbmRleF0udG9kbywgaW5kZXgpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8gKGluZGV4LCB3aGljaCkge1xuICBwcm9qZWN0c1tpbmRleF0udG9kby5zcGxpY2Uod2hpY2gsIDEpXG4gIERPTVN0dWZmLmxpc3RUb2Rvcyhwcm9qZWN0c1tpbmRleF0udG9kbywgaW5kZXgpXG59XG5cbmNvbnN0IGVkaXRUb2RvID0ge1xuICBjaGVja0xpc3Q6IChpbmRleCwgd2hpY2gpID0+IHtcbiAgfSxcbn1cblxuZXhwb3J0IHsgbmV3VG9kbywgYWRkVG9kbywgZGVsZXRlVG9kbyB9IiwiaW1wb3J0IHsgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgcHJvamVjdHMsIG5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCJcbmltcG9ydCB7IG5ld1RvZG8sIGFkZFRvZG8sIGRlbGV0ZVRvZG8gfSBmcm9tIFwiLi90b2Rvc1wiXG5cbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclRvZG9cIilcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclByb2plY3RcIilcblxuY29uc3QgRE9NU3R1ZmYgPSB7XG5cbiAgY2xlYXJUb2RvOiAoKSA9PiB7IHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gbnVsbCB9LFxuICBjbGVhclByb2plY3Q6ICgpID0+IHsgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBudWxsIH0sXG5cbiAgbGlzdFRvZG9zOiAod2hpY2gsIGluZGV4KSA9PiB7XG5cbiAgICBET01TdHVmZi5jbGVhclRvZG8oKVxuICAgIGNvbnNvbGUubG9nKHdoaWNoKVxuXG4gICAgaWYod2hpY2gubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aGljaC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9ICgpID0+IHdoaWNoW2ldLmNoZWNrID8gXCJuaWNlXCIgOiBcImdrZGxcIlxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tY2FyZFwiKVxuICAgICAgICBoMS50ZXh0Q29udGVudCA9IHdoaWNoW2ldLnRpdGxlXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBpc0NoZWNrZWQoKVxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCJcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKCkgPT4ge1xuICAgICAgICAgIGRlbGV0ZVRvZG8oaW5kZXgsIGkpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIGNvbnN0IGFycmF5ID0gW2gxLCBwLCBkZWxldGVCdG5dXG4gICAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiBkaXYuYXBwZW5kQ2hpbGQoaXRlbSkpXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSBcIk5vbmVcIlxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYWRkVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRvZG9cIlxuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBjb2JhID0gbmV3VG9kbyhcImdlbmRlbmdcIiwgXCJ5YVwiLCBcImthcGFuIGthcGFuXCIsIFwibG93XCIsIFwibm9uZVwiKVxuICAgICAgYWRkVG9kbyhjb2JhLCBpbmRleClcbiAgICB9KVxuXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKVxuICB9LFxuXG4gIGxpc3RQcm9qZWN0OiAocHJvamVjdCkgPT4ge1xuXG4gICAgRE9NU3R1ZmYuY2xlYXJQcm9qZWN0KClcbiAgICBwcm9qZWN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIilcbiAgICAgIGgzLnRleHRDb250ZW50ID0gaXRlbS50aXRsZVxuICAgICAgcC50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY1xuICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJERUxFVEVcIlxuXG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgoKSA9PiB7XG4gICAgICAgIERPTVN0dWZmLmxpc3RUb2RvcyhpdGVtLnRvZG8sIGluZGV4KVxuICAgICAgfSkpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCgpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChpbmRleClcbiAgICAgIH0pKVxuXG4gICAgICBsZXQgYXJyYXkgPSBbaDMscF1cbiAgICAgIGFycmF5LmZvckVhY2goKGNvbnRlbnQpID0+IHsgZGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpIH0pXG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgfSlcblxuICB9LFxuXG4gIFByb2plY3RBZGQ6ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RCdG5cIilcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS52YWx1ZVxuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdERlc2NcIikudmFsdWVcbiAgICAgIGNvbnN0IHByb2plY3QgPSBuZXdQcm9qZWN0KG5hbWUsIGRlc2MpXG4gICAgICBuYW1lICYmIGRlc2MgPyBhZGRQcm9qZWN0KHByb2plY3QpIDogYWxlcnQoXCJ5ZyBiZW5lclwiKVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBET01TdHVmZiIsImltcG9ydCBET01TdHVmZiBmcm9tIFwiLi9kb20uanNcIlxuaW1wb3J0IHsgbmV3VG9kbyB9IGZyb20gXCIuL3RvZG9zLmpzXCJcblxubGV0IHByb2plY3RzID0gW11cblxuZnVuY3Rpb24gbmV3UHJvamVjdCh0aXRsZSwgZGVzYykge1xuICByZXR1cm4geyB0aXRsZSwgZGVzYywgdG9kbzogW10gfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHZhbHVlKSB7XG4gIHByb2plY3RzLnB1c2godmFsdWUpXG4gIERPTVN0dWZmLmxpc3RQcm9qZWN0KHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHdoaWNoKSB7XG4gIHByb2plY3RzLnNwbGljZSh3aGljaCwgMSlcbiAgRE9NU3R1ZmYubGlzdFByb2plY3QocHJvamVjdHMpXG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG5cbiAgLy8gZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgbGV0IGhhaGEgPSBuZXdUb2RvKFwic2kgZ2FuZGlcIiwgXCJsb2xcIiwgXCJnYXRhdVwiLCBcImJlc29rXCIsIFwia2FwYW5cIiwgdHJ1ZSkgXG4gIGxldCBob2hvID0gbmV3VG9kbyhcInNpIGJhYmlcIiwgXCJobW1cIiwgXCJnYXRhdVwiLCBcImJlc29rXCIsIFwia2FwYW5cIiwgZmFsc2UpIFxuICBsZXQgYXdvayA9IG5ld1RvZG8oXCJzaSBpYmxpc1wiLCBcImhtbVwiLCBcImdhdGF1XCIsIFwiYmVzb2tcIiwgXCJrYXBhblwiLCB0cnVlKSBcbiAgbGV0IGFycmF5ID0gW2hhaGEsIGhvaG8sIGF3b2tdXG4gIGxldCBoaWhpID0gbmV3UHJvamVjdChcImZ1Y2sgZ2FuZGlcIiwgXCJ3b3dcIilcbiAgbGV0IGhlaGUgPSBuZXdQcm9qZWN0KFwiRGVmYXVsdFwiLCBcIndvd1wiKVxuICBwcm9qZWN0cy5wdXNoKGhlaGUpXG4gIHByb2plY3RzLnB1c2goaGloaSlcbiAgcHJvamVjdHNbMF0udG9kby5wdXNoKC4uLmFycmF5KVxuICBwcm9qZWN0c1sxXS50b2RvLnB1c2goLi4uYXJyYXkpXG4gIERPTVN0dWZmLmxpc3RQcm9qZWN0KHByb2plY3RzKVxuICBET01TdHVmZi5Qcm9qZWN0QWRkKClcblxufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0LCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBwcm9qZWN0cywgaW5pdCB9IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuXG5pbml0KCkiXSwibmFtZXMiOlsibmV3VG9kbyIsInRpdGxlIiwiZGVzYyIsImR1ZURhdGUiLCJwcmlvcml0eSIsIm5vdGUiLCJjaGVjayIsImRlbGV0ZVRvZG8iLCJpbmRleCIsIndoaWNoIiwicHJvamVjdHMiLCJ0b2RvIiwic3BsaWNlIiwidG9kb0NvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RDb250YWluZXIiLCJET01TdHVmZiIsImNsZWFyVG9kbyIsImlubmVySFRNTCIsImNsZWFyUHJvamVjdCIsImxpc3RUb2RvcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJpIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImgxIiwicCIsImlzQ2hlY2tlZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiZGVsZXRlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvckVhY2giLCJpdGVtIiwiYXBwZW5kQ2hpbGQiLCJhZGRUb2RvQnV0dG9uIiwidmFsdWUiLCJwdXNoIiwiYWRkVG9kbyIsImxpc3RQcm9qZWN0IiwicHJvamVjdCIsImgzIiwiY29udGVudCIsIlByb2plY3RBZGQiLCJuYW1lIiwibmV3UHJvamVjdCIsImFsZXJ0IiwiYXJyYXkiLCJoaWhpIiwiaGVoZSIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9