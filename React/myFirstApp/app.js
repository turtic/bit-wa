
const App = (props) => (
    <div>
        <h1>{props.title}</h1>
        <ShopingList babazaba={props.id} voce={props.fruits} />
    </div>
);

const ShopingList = (props) => (
    <div>
        <ul>
            <li>{props.babazaba}</li>
            <li>{props.voce.map((number) =>
                <li>{number}</li>
            )}
            </li>

        </ul>
    </div>
);



ReactDOM.render(
    <App title='Shopping list App' id='234' fruits={['Kiwi', 'Apple', 'Melon']} />,
    document.getElementById('root')
);