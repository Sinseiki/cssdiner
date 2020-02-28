var levels = [
  {
    helpTitle : "태그로 요소를 선택하기",
    selectorName : "태그 선택자",
    doThis : "plate들을 선택하세요",
    selector : "plate",
    syntax : "A",
    help : "모든 <strong>A</strong> 태그들을 선택합니다.<br><br>또한 태그는 종류에 따라 다릅니다. 예를 들면 <tag>div</tag>, <tag>p</tag>, <tag>ul</tag>는 서로 다른 태그입니다.",
    examples : [
      '<strong>div</strong>는 모든 <tag>div</tag> 태그로 이루어진 요소를 선택합니다.',
      '<strong>p</strong>는 모든 <tag>p</tag> 태그로 이루어진 요소를 선택합니다.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "bento 상자들을 선택하세요",
    selector : "bento",
    syntax : "A",
    helpTitle : "태그로 요소들을 선택하기",
    selectorName : "태그 선택자",
    help : "모든 <strong>A</strong> 태그들을 선택합니다. 또한 태그는 종류에 따라 다릅니다. 예를 들면 <tag>div</tag>, <tag>p</tag>, <tag>ul</tag>는 서로 다른 태그입니다.",
    examples : [
      '<strong>div</strong>는 모든 <tag>div</tag> 태그로 이루어진 요소를 선택합니다.',
      '<strong>p</strong>는 모든 <tag>p</tag> 태그로 이루어진 요소를 선택합니다.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "fancy plate를 선택하세요",
    selector : "#fancy",
    selectorName: "ID 선택자",
    helpTitle: "ID로 요소를 선택하기",
    syntax: "#id",
    help : '특정한 <strong>id</strong>로 요소를 선택합니다.<br>ID 선택자를 태그 선택자와 합쳐 쓸 수도 있습니다.',
    examples : [
      '<strong>#cool</strong>은 <strong>id="cool"</strong>로 되어 있는 요소를 선택합니다.',
      '<strong>ul#long</strong>은 <tag>ul id="long"</tag>로 되어 있는 요소를 선택합니다.'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "요소 안에 있는 요소를 선택하기",
    selectorName : "자손 선택자",
    doThis : "plate 안에 있는 apple을 선택하세요",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "<strong>A</strong> 안에 있는 모든 <strong>B</strong>를 선택합니다. <strong>B</strong>는 자손이라고 부르는데, 다른 요소의 안에 있기 때문입니다.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong>은 모든 <tag>p</tag> 안에 있는 <tag>strong</tag> 요소를 선택합니다.',
      '<strong>#fancy&nbsp;&nbsp;span</strong>은 모든 <strong>id="fancy"</strong>인 요소 안에 있는 <tag>span</tag> 요소를 선택합니다.',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "fancy plate 안에 있는 pickle을 선택하세요",
    selector : "#fancy pickle",
    helpTitle: "자손 선택자와 ID 선택자를 함께 쓰기",
    syntax: "#id&nbsp;&nbsp;A",
    help : '당신은 다른 선택자와 자손 선택자를 결합할 수 있습니다.',
    examples : [
      '<strong>#cool&nbsp;span</strong>은 모든 <strong>id="cool"</strong>인 요소 안에 있는 <tag>span</tag> 요소를 선택합니다.'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "small apple들을 선택하세요",
    selector : ".small",
    selectorName: "클래스 선택자",
    helpTitle: "클래스로 요소를 선택하기",
    syntax: ".class",
    help : '클래스 선택자는 해당 클래스를 가지고 있는 모든 요소를 선택합니다. 각 요소는 ID를 하나만 가질 수 있지만 클래스는 하나 이상 가질 수 있습니다.',
    examples : [
    '<strong>.neato</strong>는 <strong>class="neato"</strong>인 모든 요소를 선택합니다.'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "small orange들을 선택하세요",
    selector : "orange.small",
    helpTitle: "클래스 선택자를 다른 선택자와 함께 쓰기",
    syntax: "A.className",
    help : '당신은 클래스 선택자를 태그 선택자와 같은 다른 선택자를 결합할 수 있습니다.',
    examples : [
      '<strong>ul.important</strong>는 모든 <tag>ul</tag> 요소들 중에서 <strong>class="important"</strong>인 요소들을 선택합니다.',
      '<strong>#big.wide</strong>는 <strong>id="big"</strong>이면서 <strong>class="wide"</strong>인 요소를 선택합니다.'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "bento들 안에 있는 small orange들을 선택하세요",
    selector : "bento orange.small",
    syntax: "생각해보세요!",
    helpTitle: "당신은 할 수 있습니다...",
    help : '그 동안 배웠던 것들을 결합하면 풀 수 있습니다.',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "모든 plate들과 bento들을 선택하세요",
    selector : "plate, bento",
    selectorName : "쉼표 복합 선택자",
    helpTitle: "결합하세요, 선택자들을... 쉼표로!",
    syntax : "A, B",
    help : '샤트너 테크놀로지 덕분에, <strong>A</strong> 요소들과 <strong>B</strong> 요소들을 한번에 선택할 수 있습니다. 당신은 어떤 선택자들이건 이런 방법으로 결합을 시킬 수 있습니다. 그리고 당신은 두 개 이상의 선택자들을 지정할 수 있습니다.',
    examples: [
    '<strong>p, .fun</strong>은 모든 <tag>p</tag> 요소들과 모든 <strong>class="fun"</strong>인 요소들을 선택합니다.',
    '<strong>a, p, div</strong>는 모든 <tag>a</tag>, <tag>p</tag>, <tag>div</tag> 요소들을 선택합니다.'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "모든 걸 선택하세요!",
    selector : "*",
    selectorName:  "전체 선택자",
    helpTitle: "당신은 모든 것을 선택할 수 있습니다!",
    syntax : "*",
    help : '당신은 전체 선택자를 이용하여 모든 요소를 선택할 수 있습니다!',
    examples : [
      '<strong>p *</strong>는 <tag>p</tag> 요소 안에 있는 모든 요소를 선택합니다.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "plate 안에 있는 모든 걸 선택하세요",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "전체 선택자를 함께 쓰기",
    help : '<strong>A</strong> 안에 있는 모든 요소들을 선택합니다.',
    examples : [
      '<strong>p *</strong>은 <tag>p</tag> 안에 있는 모든 요소들을 선택합니다.',
      '<strong>ul.fancy *</strong>는 <tag>ul class="fancy"</tag> 안에 있는 모든 요소들을 선택합니다.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "plate 바로 다음에 있는 apple들을 선택하세요",
    selector : "plate + apple",
    helpTitle: "다른 요소의 바로 다음에 있는 요소를 선택하기",
    selectorName: "인접 형제 선택자",
    syntax : "A + B",
    help : "<strong>A</strong> 요소 바로 다음에 따르는 형제인 <strong>B</strong> 요소를 선택합니다. 같은 부모 안에 있는 자식 요소를 서로 형제라고 합니다. <br/><br/>HTML 마크업에서는 들여쓴 칸의 크기가 똑같은 요소들을 형제라고 합니다.",
    examples : [
      '<strong>p + .intro</strong>는 <tag>p</tag> 바로 다음에 있는 <strong>class="intro"</strong>인 요소를 선택합니다.',
      '<strong>div + a</strong>는 <tag>div</tag> 바로 다음에 있는 <tag>a</tag> 요소를 선택합니다.'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "일반 형제 선택자",
    helpTitle: "다른 요소 다음에 있는 요소들을 선택하기",
    syntax: "A ~ B",
    doThis : "bento 다음에 있는 pickle들을 선택하세요",
    selector : "bento ~ pickle",
    help : "당신은 어떤 요소 다음에 있는 형제 요소들을 선택할 수 있습니다. 인접 형제 선택자인 (A + B)와 비슷하지만 다음에 있는 모든 요소들을 하나가 아니라 모두 선택합니다.",
    examples : [
      '<strong>A ~ B</strong>는 <strong>A</strong> 다음에 있는 모든 <strong>B</strong>를 선택합니다.'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "자식 선택자",
    syntax: "A > B&nbsp;",
    doThis : "plate 바로 안에 있는 apple을 선택하세요",
    selector : "plate > apple",
    helpTitle: "요소의 자식을 선택하기",
    help : "당신은 요소의 자식 요소들을 선택할 수 있습니다. 자식 요소는 다른 요소(부모) 바로 안에 둘러싸인 요소를 말합니다. <br><br>자식보다 더 깊게 안으로 들어가 버린 요소는 자손이라고 합니다.",
    examples : [
      '<strong>A > B</strong>는 <strong>A</strong>의 자식인 모든 <strong>B</strong>를 선택합니다.'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "First Child 가상 선택자",
    helpTitle: "첫째 요소를 선택하기",
    doThis : "첫 번째 orange를 선택하세요",
    selector : "orange:first-child",
    syntax: ":first-child",

    help : "당신은 첫 번째 자식 요소를 선택할 수 있습니다. 자식 요소는 다른 요소(부모) 바로 안에 둘러싸인 요소를 말합니다. 당신은 이 가상 선택자를 다른 선택자와 함께 쓸 수 있습니다.",
    examples : [
      '<strong>:first-child</strong>는 모든 첫째 자식 요소들을 선택합니다.',
      '<strong>p:first-child</strong>는 모든 첫째 자식 요소들 중에 <tag>p</tag> 요소들을 선택합니다.',
      '<strong>div p:first-child</strong>는 <tag>div</tag> 안에 있는 모든 첫째 자식 중에 <tag>p</tag> 요소를 선택합니다.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Only Child 가상 선택자",
    helpTitle: "형제 없이 혼자 있는 요소를 선택하기",
    doThis : "plate들 안에 혼자 있는 apple과 pickle을 선택하세요",
    selector : "apple:only-child, pickle:only-child",
    syntax: ":only-child",
    help : "당신은 어떤 요소 안에 혼자 있는 요소를 선택할 수 있습니다.",
    examples : [
      '<strong>span:only-child</strong>는 어떤 요소 안에 있는 <tag>span</tag>들 중에서 형제 없이 혼자 있는 <tag>span</tag>을 선택합니다.',
      '<strong>ul li:only-child</strong>는 <tag>ul</tag> 안에서 형제 없이 혼자 있는 <tag>li</tag>를 선택합니다.'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Last Child 가상 선택자",
    helpTitle: "다른 요소 안에 있는 마지막 자식 요소를 선택하기",
    doThis : "small한 음식들 중 마지막 음식들을 선택하세요",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "당신은 다른 요소 안에 있는 마지막 자식 요소를 선택하는 데에 이 선택자를 사용할 수 있습니다.<br><br>참고 &rarr; 형제 없이 혼자 있는 요소들은 first-child가 될 수도 있고, only-child가 될 수도 있으며 last-child가 될 수도 있습니다!",
    examples : [
      '<strong>:last-child</strong>는 모든 마지막 자식 요소들을 선택합니다.',
      '<strong>span:last-child</strong>는 <tag>span</tag>들 중 마지막 <tag>span</tag>을 선택합니다.',
      '<strong>ul li:last-child</strong>는 <tag>ul</tag> 안에 있는 마지막 <tag>li</tag> 요소들을 선택합니다.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Nth Child 가상 선택자",
    helpTitle: "다른 요소 안에 있는 요소를 순서로 선택하기",
    doThis : "3번째 plate를 선택하세요",
    selector : "plate:nth-child(3)",
    syntax: ":nth-child(A)",
    help : "다른 요소 안에 있는<strong>n번째</strong> 자식 요소를 선택합니다.",
    examples : [
      '<strong>:nth-child(8)</strong>은 다른 요소 안에 있는 8번째 자식 요소를 선택합니다.',
      '<strong>div p:nth-child(2)</strong>는 <strong>div</strong> 안에 있는 모든 2번째 자식 요소들 중 <strong>p</strong>를 선택합니다.',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Nth Last Child 선택자",
    helpTitle: "다른 요소 안에 있는 자식 요소를 역순에 따라 선택하기",
    doThis : "뒤에서 세 번째에 있는 bento를 선택하세요",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "부모의 자식을 역순에 따라 선택합니다. nth-child와 비슷하지만, 순서는 역순입니다!",
    examples : [
      '<strong>:nth-last-child(2)</strong>는 다른 요소 안에서 뒤에서 두 번째에 있는 모든 요소들을 선택합니다.'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "First of Type 선택자",
    helpTitle: "특정 태그 중 첫번째 요소를 선택하기",
    doThis : "첫 번째 'apple'을 선택하세요",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "다른  요소 안에 있는 태그 중 첫 번째 요소를 선택합니다.",
    examples : [
      '<strong>span:first-of-type</strong>은 요소 안에 있는 첫째 <tag>span</tag>을 선택합니다.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Nth of Type 선택자",
    doThis: "짝수 번째 plate들을 선택하세요",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "다른 요소 안에서 특정 태그를 순서에 따라 선택합니다. 짝수번째(even)나 홀수번째(odd) 요소도 선택할 수 있습니다.",
    examples: [
      '<strong>div:nth-of-type(2)</strong>는 두 번째 <strong>div</strong> 요소를 선택합니다.',
      '<strong>.example:nth-of-type(odd)</strong>는 example 클래스가 있는 모든 홀수번째 요소를 선택합니다.'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "수식이 있는 Nth-of-type 선택자",
    doThis: "3번째 plate부터 2n번째 plate를 선택하세요.",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "nth-of-type 수식 선택자는 특정 <strong>B</strong> 번째 요소부터 시작해서 각각의 <strong>A</strong>번째를 선택합니다.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong>는 두 번째 <tag>span</tag>부터 시작해서 각 6번째 <tag>span</tag>들을 선택합니다.(n이 0이 될 수 있기 때문에 두 번째 <tag>span</tag>도 포함해서 선택합니다.)'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Only of Type 선택자",
    helpTitle: "부모 안에 하나만 있는 태그 요소를 선택하기",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "plate 안에 하나만 있는 apple을 선택하세요",
    help : "다른 요소 안에 하나만 있는 태그 요소를 선택합니다.",
    examples : [
      '<strong>p span:only-of-type</strong>는 <tag>p</tag> 안에서 하나만 있는 <tag>span</tag> 요소를 선택합니다.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Last of Type Selector",
    helpTitle: "Select the last element of a specific type",
    doThis : "Select the last apple and orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Empty Selector",
    helpTitle: "Select elements that don't have children",
    doThis : "Select the empty bentos",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Selects elements that don't have any other elements inside of them.",
    examples : [
      '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elements that don't match the negation selector",
    doThis : "Select the big apples",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Select the items for someone",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples : [
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Select the plates for someone",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    examples : [
      '<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.',
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Select all elements that have a specific attribute value",
    doThis : "Select Vitaly's meal",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "Attribute Starts With Selector",
    helpTitle: "Select all elements with an attribute value that starts with specific characters",
    doThis : "Select the items for names that start with 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear</strong> or <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Ends With Selector",
    helpTitle: "Select all elements with an attribute value that ends with specific characters",
    doThis : "Select the items for names that end with 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Attribute Wildcard Selector",
    helpTitle: "Select all elements with an attribute value that contains specific characters anywhere",
    syntax: '[attribute*="value"]',
    doThis : "Select the meals for names that contain 'obb'",
    selector : '[for*="obb"]',
    help : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
