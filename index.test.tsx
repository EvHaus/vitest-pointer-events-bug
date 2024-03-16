import {describe, expect, it, vi} from 'vitest';
import Pagination from '.';
import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Pagination />', () => {
	const DEFAULT_PROPS = {
		onNextPage: () => {},
		onPageChange: () => {},
		onPreviousPage: () => {},
	}

	it('should navigate to the page when clicking on that specific page', async () => {
		const onPageChange = vi.fn();
		const user = userEvent.setup()
		const {getByText} = render(
			<Pagination
				{...DEFAULT_PROPS}
				onPageChange={onPageChange}
				page={1}
				totalPages={5} />
		);
		await user.click(getByText(2));
		expect(onPageChange).toHaveBeenCalledWith(2);
	});
});
