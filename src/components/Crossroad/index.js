import React from 'react';
import '../../crossroad.css';

function Crossroad(props){
    const { color = '', children } = props;
    return (

        <div>
        <div class="wrapper">
            <div class={color === 1 ? `circle circleBGColor${color}`: 'circle'} >
                <p class={children === 1 ? `circleColor${children}`: ''}>1</p>
            </div>
            <div class={color === 2 ? `circle circleBGColor${color}`: 'circle'} >
            <p class={children === 2 ? `circleColor${children}`: ''}>2</p>
            </div>
            <div class={color === 3 ? `circle circleBGColor${color}`: 'circle'} >
            <p class={children === 3 ? `circleColor${children}`: ''}>3</p>
            </div>
        	</div>
        </div>

    )
};
export default Crossroad;