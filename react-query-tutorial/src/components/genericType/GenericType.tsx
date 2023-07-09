interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
  }
  
 export function List<T>({ items, renderItem }: ListProps<T>) {
    return (
      <>
        {items.map((item , index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </>
    );
  }