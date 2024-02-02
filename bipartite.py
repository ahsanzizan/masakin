# use coloring technique that i found from google
    def isBipartite(graph: List[List[int]]) -> bool:
        n = len(graph)
        colors = [0] * n

        def dfs(node, color):
            if colors[node] != 0:
                return colors[node] == color
            
            colors[node] = color
            for neighbor in graph[node]:
                if not dfs(neighbor, -color):
                    return False
            return True
        
        for i in range(n):
            if colors[i] == 0:
                if not dfs(i, 1):
                    return False
        
        return True
