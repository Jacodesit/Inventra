import { PanelLeftClose } from '../../../../components/animate-ui/icons/panel-left-close';

type pageProps = {
    onToggle: () => void
}

export default function CloseLeftPanel({onToggle}:pageProps) {
    return (
        <div>
            <PanelLeftClose onClick={onToggle} animateOnHover size={24} />
        </div>
    )
}
