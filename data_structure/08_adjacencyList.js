// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
	constructor() {
		this.vertices = {};
	}

	addVertex(vertex) {
		// TODO: 정점을 추가합니다.
		// 넘겨받은 인자(정점)은 키가 되며, 빈 배열을 값으로 할당합니다.
		// 이미 존재하는 정점이라면, 덮어 씌워지지 않아야 합니다.
		this.vertices["FILL_ME_IN"] = "FILL_ME_IN";
	}

	contains(vertex) {
		// 인자로 넘겨받은 정점의 존재여부를 반환합니다.
		return !!this.vertices[vertex];
	}

	addEdge(fromVertex, toVertex) {
		// TODO: 간선을 추가합니다.
		// - fromVertex의 인접 리스트에 toVertex를 추가하고
		// - toVertex의 인접 리스트에 fromVertex를 추가합니다.
		// 넘겨받은 2개의 정점 모두 존재하는 정점이어야 합니다.

		if (!this.contains("FILL_ME_IN") || !this.contains("FILL_ME_IN")) {
			return;
		}

		if (!this.hasEdge("FILL_ME_IN", "FILL_ME_IN")) {
		}

		if (!this.hasEdge("FILL_ME_IN", "FILL_ME_IN")) {
		}
	}

	hasEdge(fromVertex, toVertex) {
		// 만약 정점(fromVertex)이 존재하지 않는다면
		if (!this.contains(fromVertex)) {
			// false를 반환합니다
			return false;
		}
		// 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
		return !!this.vertices[fromVertex].includes(toVertex);
	}

	removeEdge(fromVertex, toVertex) {
		// TODO: 간선을 삭제합니다.
		// 인자로 넘겨받은 두 정점이 모두 존재한다면
		// - fromVertex의 인접 리스트에 있는 toVertex를 삭제하고
		// - toVertex의 인접 리스트에 있는 fromVertex를 삭제합니다.

		if (!this.contains("FILL_ME_IN") || !this.contains("FILL_ME_IN")) {
			return;
		}

		if (this.hasEdge("FILL_ME_IN", "FILL_ME_IN")) {
			const index = this.vertices["FILL_ME_IN"].indexOf("FILL_ME_IN");
			this.vertices["FILL_ME_IN"].splice(index, 1);
		}
		// TODO:  두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
	}

	removeVertex(vertex) {
		// TODO: 정점을 삭제합니다.
		// 인자로 넘겨받은 정점(A)이 존재한다면
		// - 이 정점(A)을 삭제함은 물론,
		// - 다른 모든 정점들의 리스트를 순회하며 넘겨받은 정점(A)과 이어져 있는 간선을 제거합니다
		if (this.contains(vertex)) {
		}
	}
}