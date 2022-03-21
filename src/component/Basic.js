import react from "react";

function Basic() {
  return (
    <div className="basicWrap">
      <h1>基本理論題</h1>
      <h3 className="question">1. 什麼是 React.js?</h3>
      <p>
        React 是一個陳述式、高效且具有彈性的 JavaScript
        函式庫，用來建立使用者介面。利用獨立的「component」元件，來建立複雜的
        UI，component 切分可大可小。
      </p>
      <h3 className="question">
        2. 什麼是元件? 為什麼元件的概念對 React 來說很重要?
      </h3>
      <p>
        元件是一個小而且可重複使用的程式碼。因為React會根據資料的改變，有效率地更新我們的元件，讓使用者看到螢幕上想看的東西，所以元件是組成React主要的元素。
      </p>
      <h3 className="question">3. Props 和 State 差別在哪?</h3>
      <p>
        一個元件的 props 屬性會包含所有該元件的資訊，通過 props
        可以帶給另一個元件擁有該元件的所有資訊。 <br />
        State不是透過外部傳進來的，而是由一個元件決定它自己內部 state。
      </p>
      <h3 className="question">
        4. 選擇⼀個曾經在專案中⽤過的元件週期，並介紹你是怎麼使⽤的?
      </h3>
      <p>
        更新，使用useEffect(()=>{}
        ,[data])，當data改變時，useEffect會進行畫面重新渲染。
      </p>
      <h3 className="question">
        5. Class 跟 Functional 元件的差別? 該怎麼選擇?
      </h3>
      <p>
        Functional： 簡潔，更專注在對應UI的
        component，設計出更加合理的頁面上元件樹的結構。
        <br />
        Class：功能更強大複雜，可以維護自身狀態 ( state
        )，也包含（掛載、更新、解除安裝）等生命週期方法。
        <br />
        實際操作上，當一個元件不需要管理自身狀態時，可以把它設計成Functional元件，當有足夠的理由發現它需要“升級”為Class元件時，再把它改造為Class元件，因為Functional元件“升級”為Class元件是有一定成本的，這樣就會要求你做這個改造前更認真地思考其合理性，而不是僅僅為了一時的方便就使用Class元件。
      </p>
      <h3 className="question">6. 什麼是 React 中的 Events?</h3>
      <p>
        React 中的常見 event 有：onClick、onChange、e.preventDefault
        等等，使用駝峰式寫法，事件的值在 JSX 中是一個 function ，在 html
        中是字串型式。
      </p>
      <h3 className="question">7. 什麼是 JSX?</h3>
      <p>
        是 JavaScript 的語法擴充，JSX 語法的重點在於允許我們在 JS 的檔案中使用
        HTML 的標籤，並且使用 JSX 語法建立的是「一個 React 的
        element」，此外這樣的標籤語法比起 HTML，更貼近於 JavaScript。
      </p>
      <h3 className="question">8. 什麼是 Virtual DOMs? ⼜是怎麼運作的?</h3>
      <p>
        Virtual DOM 本身是一個 JavaScript 的物件，為虛擬 DOM，存在在 memory
        當中。 先將原本的 DOM
        結構複製一份出來，但只會複製跟畫面渲染高度相關的資訊，當資料變動時，前端框架會先建立一個新的
        virtual DOM，然後計算出新舊 virtual DOM 之間的差別，最後才會操作真正的
        DOM，且只有操作有變動的部分，這樣可以避免不必要的效能浪費。
      </p>
      <h3 className="question">
        9. 你會怎麼 Debug ⽤ React 寫出來的網⾴應⽤? ⽤哪些⼯具?
      </h3>
      <p>
        通常有 bug 時網頁都會跳出警告，主要工具為開發人員工具。如果是 undefined
        相關訊息或是XXX is not a function 的錯誤訊息我會使用 console.log
        去看變數的型別、產生的值再去判斷。若是打 api 去後端(使用網址或 get
        api)，會使用 Network 查看，localStorage 相關會用 Application 查看。
      </p>
      <h3 className="question">10. ⽤ React 的優點是什麼?</h3>
      <p>
        可重複使用的原件可加速前端開發、可以下載很多套件，增加使用者體驗及網站效能、React速度很快
        ( 使用虛擬 DOM )、有標準化的 API 解決了跨瀏覽器問題 ( 虛擬 DOM )。
      </p>
      <h3 className="question">11. React 有什麼缺點和限制?</h3>
      <p>
        不適合單獨做一個完整的框架，需要安裝套件才能完整應用、元件概念和 JSX
        都要花時間熟悉、初期就要先規劃好元件配置，否則專案進行中可能會額外產很多元件或是一個元件有太多東西。
      </p>
      <h3 className="question">12. 什麼是 Redux 或 context api?</h3>
      <p>
        Redux 是一套除了 React 外也可以在其他 UI
        的函式庫中使用的資料流管理工具，定義了資料流的規範補足了 React
        在元件變多後狀態難以控管的問題 ( 單向資料流的型態造成要傳遞很多層
        )，讓開發者能統一管理元件的狀態，讓程式更容易去維護和測試。 <br />
        Context api 是簡化版的
        redux，它只考慮跨组件層級傳遞和共享，不考慮狀態更新。
      </p>
      <h3 className="question">13. 使⽤ Redux 的優點是什麼?</h3>
      <p>
        定義了一套公版資料流與程式架構，提高開發方式的可預期性、可維護性，透過
        Redux 的開發者外掛開發也能夠更方便。
      </p>
      <h3 className="question">14. 為什麼你會想選擇 React?</h3>
      <p>
        可重複使用的原件可加速前端開發，Virtual DOM
        在某些情境下優化了效能、JavaScript
        的開發者能在同個檔案完成所有開發動作、同樣的程式碼可以在 Client 端和
        Sever 端渲染出一樣的結果。
      </p>
      <h3 className="question">15. 什麼是 react-hook-form?</h3>
      <p>React 中的表單驗證。</p>
    </div>
  );
}
export default Basic;
