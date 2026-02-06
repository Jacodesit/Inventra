import { PanelLeftOpen } from '../../../../components/animate-ui/icons/panel-left-open';

type pageProps = {
    onToggle: () => void
}

export default function OpenLeftPanel({onToggle}:pageProps) {
    return (
        <div>
            <PanelLeftOpen onClick={onToggle} animateOnHover size={24} />
        </div>
    )
}
