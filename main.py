import pandas as pd

#Takes a long time to load the pandas df due to length of table.
groceries_db = pd.read_excel("db/Grocery_UPC_Database.xlsx", index_col=0)
brands = groceries_db['brand'].tolist()
name = groceries_db['name'].tolist()

def search(query):
    """
    Input: a search query
    Output: an output of list len 5
    """
    #TODO: Implement a Trie data stucture to improve runtime
    matching = [s for s in name if query in s]

    return matching[:5]
