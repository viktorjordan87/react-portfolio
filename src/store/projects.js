/*Images*/
import image1 from "../images/Hangman.PNG";
import image2 from "../images/RecoilTodo.PNG";
import image3 from "../images/Calculator.PNG";
import image4 from "../images/pagination.PNG";
import image5 from "../images/PersistLocalStorage.PNG";
import image6 from "../images/PersistLocalUrl.PNG";
import image7 from "../images/AutoComplete.PNG";
import image8 from "../images/PhotoGallery.PNG";
import image9 from "../images/Countries.PNG";
import image10 from "../images/Loading.PNG";
import image11 from "../images/errorhandling.PNG";
import image12 from "../images/hoc.PNG";
import image13 from "../images/hoc2.PNG";
import image14 from "../images/reference.PNG";
import image15 from "../images/reactredux.PNG";
import image16 from "../images/accordion.PNG";
import image17 from "../images/musicplayer.PNG";
import image18 from "../images/auth.PNG";
import image19 from "../images/currency.PNG";
import image20 from "../images/debounce.PNG";

const github = "https://github.com/viktorjordan87/react-portfolio/tree/master/src/components/Apps/";

const projects = [
	{ id: 1, title: "Hangman", name: "Hangman", githuburl: github + "Hangman", tags: ["useState", "props drilling"], src: image1 },
	{
		id: 2,
		title: "Recoil Todo list",
		name: "RecoilTodo",
		githuburl: github + "RecoilTodo",
		tags: ["recoil", "useRecoilState", "useRecoilValue", "mui", "3rd party library"],
		src: image2,
	},
	{
		id: 3,
		title: "Calculator",
		name: "calculator",
		githuburl: github + "Calculator",
		tags: ["useState"],
		src: image3,
	},
	{
		id: 4,
		title: "Pagination",
		name: "pagination",
		githuburl: github + "Pagination",
		tags: ["pagination", "mui"],
		src: image4,
	},
	{
		id: 5,
		title: "Persisting state with localStorage",
		name: "persisting-localstorage",
		githuburl: github + "Persisting/LocalStorage",
		tags: ["localStorage", "useState", "useEffect"],
		src: image5,
	},
	{
		id: 6,
		title: "Persisting state url params",
		name: "persisting-url",
		githuburl: github + "Persisting/UrlParams",
		tags: ["qs", "history", "useState", "useEffect", "3rd party library"],
		src: image6,
	},
	{
		id: 7,
		title: "Autocomplete input field with dropdown",
		name: "autocomplete",
		githuburl: github + "AutoComplete",
		tags: ["mui", "autocomplete", "dropwdown"],
		src: image7,
	},
	{
		id: 8,
		title: "Photo Gallery",
		name: "photogallery",
		githuburl: github + "PhotoGallery",
		tags: ["axios", "API", "3rd party library", "async", "await", "pagination"],
		src: image8,
	},
	{
		id: 9,
		title: "Countries API",
		name: "countries",
		githuburl: github + "Countries",
		tags: ["API", "pagination", "sorting", "axios", "loading"],
		src: image9,
	},
	{
		id: 10,
		title: "Loading event and spinners",
		name: "loading",
		githuburl: github + "Loading",
		tags: ["loading", "spinners", "3rd party library", "react-loading", "spinners-react"],
		src: image10,
	},
	{
		id: 11,
		title: "Error handling",
		name: "errorhandling",
		githuburl: github + "ErrorHandling",
		tags: ["error", "error handling", "3rd party library", "react-error-boundary"],
		src: image11,
	},
	{
		id: 12,
		title: "Higher-Order Component with loading",
		name: "higherordercomponent",
		githuburl: github + "HOC",
		tags: ["Higher-Order Component", "HOC", "loading", "API"],
		src: image12,
	},
	{
		id: 13,
		title: "Higher-Order Component with styling",
		name: "higherordercomponent2",
		githuburl: github + "HOC2",
		tags: ["Higher-Order Component", "HOC", "inline style"],
		src: image13,
	},
	{
		id: 14,
		title: "useRef in practice",
		name: "reference",
		githuburl: github + "Reference",
		tags: ["useRef", "reference", "current", "focus"],
		src: image14,
	},
	{
		id: 15,
		title: "React Redux Counter",
		name: "reactredux",
		githuburl: github + "ReactRedux",
		tags: ["Redux", "react-redux", "configureStore", "createSlice"],
		src: image15,
	},
	{
		id: 16,
		title: "Accordion with Context",
		name: "accordion",
		githuburl: github + "Accordion",
		tags: ["accordion", "createContext", "useContext", "Provider", "mui"],
		src: image16,
	},
	{
		id: 17,
		title: "Music Player",
		name: "musicplayer",
		githuburl: github + "MusicPlayer",
		tags: ["useState", "useRef", "useEffect", "mui", "slider", "audio"],
		src: image17,
	},
	{
		id: 18,
		title: "Authentication",
		name: "auth",
		githuburl: github + "Auth",
		tags: ["authentication", "custom hook", "sessionStorage", "react-router-dom", "outlet", "link"],
		src: image18,
		show: false,
	},
	// {
	// 	id: 19,
	// 	title: "Live currency exchange",
	// 	name: "currencyexchange",
	// 	githuburl: github + "Currency",
	// 	tags: ["api", "conversion functions", "useState", "useEffect", "autocomplete", "new Map"],
	// 	src: image19,
	// },
	{
		id: 20,
		title: "Debounce",
		name: "debounce",
		githuburl: github + "Debounce",
		tags: ["api", "axios", "fetch", "useMemo"],
		src: image20,
	},
];

export default projects;
