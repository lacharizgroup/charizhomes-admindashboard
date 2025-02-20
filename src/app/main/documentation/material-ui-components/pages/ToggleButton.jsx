import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
import ToggleButtonsComponent from '../components/toggle-button/ToggleButtons';
import ToggleButtonsRaw from '../components/toggle-button/ToggleButtons.jsx?raw';
import ToggleButtonsMultipleComponent from '../components/toggle-button/ToggleButtonsMultiple';
import ToggleButtonsMultipleRaw from '../components/toggle-button/ToggleButtonsMultiple.jsx?raw';
import ToggleButtonSizesComponent from '../components/toggle-button/ToggleButtonSizes';
import ToggleButtonSizesRaw from '../components/toggle-button/ToggleButtonSizes.jsx?raw';
import ColorToggleButtonComponent from '../components/toggle-button/ColorToggleButton';
import ColorToggleButtonRaw from '../components/toggle-button/ColorToggleButton.jsx?raw';
import VerticalToggleButtonsComponent from '../components/toggle-button/VerticalToggleButtons';
import VerticalToggleButtonsRaw from '../components/toggle-button/VerticalToggleButtons.jsx?raw';
import ToggleButtonNotEmptyComponent from '../components/toggle-button/ToggleButtonNotEmpty';
import ToggleButtonNotEmptyRaw from '../components/toggle-button/ToggleButtonNotEmpty.jsx?raw';
import StandaloneToggleButtonComponent from '../components/toggle-button/StandaloneToggleButton';
import StandaloneToggleButtonRaw from '../components/toggle-button/StandaloneToggleButton.jsx?raw';
import CustomizedDividersComponent from '../components/toggle-button/CustomizedDividers';
import CustomizedDividersRaw from '../components/toggle-button/CustomizedDividers.jsx?raw';
function ToggleButtonDoc(props) {
    return (<>
			<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
				<DocumentationPageBreadcrumb />
				<Button className="normal-case" variant="contained" color="secondary" component="a" href="https://mui.com/components/toggle-button" target="_blank" role="button" size="small" startIcon={<FuseSvgIcon size={20}>heroicons-outline:external-link</FuseSvgIcon>}>
					Reference
				</Button>
			</div>
			<Typography className="text-32 my-16 font-700" component="h1">
				Toggle Button
			</Typography>
			<Typography className="description">A Toggle Button can be used to group related options.</Typography>

			<Typography className="text-14 mb-32" component="div">
				To emphasize groups of related Toggle buttons, a group should share a common container. The{' '}
				<code>ToggleButtonGroup</code> controls the selected state of its child buttons when given its own{' '}
				<code>value</code> prop.
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Exclusive selection
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				With exclusive selection, selecting one option deselects any other.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				In this example, text justification toggle buttons present options for left, center, right, and fully
				justified text (disabled), with only one item available for selection at a time.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<strong>Note</strong>: Exclusive selection does not enforce that a button must be active. For that
				effect see <a href="#enforce-value-set">enforce value set</a>.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="ToggleButtons.js" className="my-16" iframe={false} component={ToggleButtonsComponent} raw={ToggleButtonsRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Multiple selection
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have
				multiple options selected.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="ToggleButtonsMultiple.js" className="my-16" iframe={false} component={ToggleButtonsMultipleComponent} raw={ToggleButtonsMultipleRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Size
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				For larger or smaller buttons, use the <code>size</code> prop.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="ToggleButtonSizes.js" className="my-16" iframe={false} component={ToggleButtonSizesComponent} raw={ToggleButtonSizesRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Color
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="ColorToggleButton.js" className="my-16" iframe={false} component={ColorToggleButtonComponent} raw={ColorToggleButtonRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Vertical buttons
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				The buttons can be stacked vertically with the <code>orientation</code> prop set to
				&quot;vertical&quot;.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="VerticalToggleButtons.js" className="my-16" iframe={false} component={VerticalToggleButtonsComponent} raw={VerticalToggleButtonsRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Enforce value set
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				If you want to enforce that at least one button must be active, you can adapt your handleChange
				function.
			</Typography>

			<FuseHighlight component="pre" className="language-jsx">
				{` 
const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};

const handleDevices = (event, newDevices) => {
  if (newDevices.length) {
    setDevices(newDevices);
  }
};
`}
			</FuseHighlight>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="ToggleButtonNotEmpty.js" className="my-16" iframe={false} component={ToggleButtonNotEmptyComponent} raw={ToggleButtonNotEmptyRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Standalone toggle button
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="StandaloneToggleButton.js" className="my-16" iframe={false} component={StandaloneToggleButtonComponent} raw={StandaloneToggleButtonRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Customization
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				Here is an example of customizing the component. You can learn more about this in the{' '}
				<a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				<FuseExample name="CustomizedDividers.js" className="my-16" iframe={false} component={CustomizedDividersComponent} raw={CustomizedDividersRaw}/>
			</Typography>
			<Typography className="text-24 mt-24 mb-10 font-700" component="h2">
				Accessibility
			</Typography>
			<Typography className="text-16 mt-20 mb-10 font-700" component="h3">
				ARIA
			</Typography>
			<ul className="space-y-16">
				<li>
					ToggleButtonGroup has <code>{`role="group"`}</code>. You should provide an accessible label with{' '}
					<code>{`aria-label="label"`}</code>, <code>{`aria-labelledby="id"`}</code> or{' '}
					<code>{`<label>`}</code>.
				</li>
				<li>
					ToggleButton sets <code>{`aria-pressed="<bool>"`}</code> according to the button state. You should
					label each button with <code>aria-label</code>.
				</li>
			</ul>
			<Typography className="text-16 mt-20 mb-10 font-700" component="h3">
				Keyboard
			</Typography>
			<Typography className="text-14 mb-32" component="div">
				At present, toggle buttons are in DOM order. Navigate between them with the tab key. The button behavior
				follows standard keyboard semantics.
			</Typography>
		</>);
}
export default ToggleButtonDoc;
