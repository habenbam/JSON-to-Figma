import * as React from 'react';

import {Switcher} from '../../../../elements';
import {SectionWrapper} from '../../../../sections';

interface Props {
    onChange?(event: React.FormEvent<HTMLInputElement>): void;
}

const MergeEqualKeysSwitcher: React.FC<Props> = props => {
    return (
        <SectionWrapper divider title="Merge equal keys" onChange={props.onChange}>
            <Switcher id="merge-equal-keys-check" label="Treat all occurrences of a selected key as one key." />
        </SectionWrapper>
    );
};

MergeEqualKeysSwitcher.defaultProps = {
    onChange: () => {},
} as Partial<Props>;

export default MergeEqualKeysSwitcher;
