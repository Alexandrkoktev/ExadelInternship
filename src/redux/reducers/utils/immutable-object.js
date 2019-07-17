export default function immutable(state) {
	return JSON.parse(JSON.stringify(state));
};
