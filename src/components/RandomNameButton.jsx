import { Button } from "./Button";
import { getRandomName } from "../library/random";

export function RandomNameButton(props) {
    function handleClick() {
        props.onRandomName(getRandomName());
    }

    return (
        <Button type="button" onClick={handleClick} label="Get random name" />
    );
}
