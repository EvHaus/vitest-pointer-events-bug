import {describe, expect, it, vi} from 'vitest';
import MyComponent from './';
import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<MyComponent />', () => {
	it('should be able to click the button', async () => {
		const onClick = vi.fn();
		const user = userEvent.setup()
		const {getByText} = render(
			<MyComponent onClick={onClick} />
		);
		await user.click(getByText('Click me'));
		expect(onClick).toHaveBeenCalled();
	});
});
